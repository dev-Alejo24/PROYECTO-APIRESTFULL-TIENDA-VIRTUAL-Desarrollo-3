"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const yamljs_1 = __importDefault(require("yamljs"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const userRolesRoutes_1 = __importDefault(require("./routes/userRolesRoutes"));
const orderStatusRoutes_1 = __importDefault(require("./routes/orderStatusRoutes"));
const productCategoriesRoutes_1 = __importDefault(require("./routes/productCategoriesRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const purchareOrdesRoutes_1 = __importDefault(require("./routes/purchareOrdesRoutes"));
const orderDetailsRoutes_1 = __importDefault(require("./routes/orderDetailsRoutes"));
const addressesRoutes_1 = __importDefault(require("./routes/addressesRoutes"));
const identificationTypeRoutes_1 = __importDefault(require("./routes/identificationTypeRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use(userRoutes_1.default);
app.use(rolesRoutes_1.default);
app.use(userRolesRoutes_1.default);
app.use(orderStatusRoutes_1.default);
app.use(productCategoriesRoutes_1.default);
app.use(productsRoutes_1.default);
app.use(purchareOrdesRoutes_1.default);
app.use(orderDetailsRoutes_1.default);
app.use(addressesRoutes_1.default);
app.use(identificationTypeRoutes_1.default);
const swaggerDocument = yamljs_1.default.load('./docs/swagger.yaml');
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(errorHandler_1.default);
app.get('/', (_req, res) => {
    res.send('Api Tienda Virtual Grupo 3');
});
exports.default = app;
//# sourceMappingURL=app.js.map
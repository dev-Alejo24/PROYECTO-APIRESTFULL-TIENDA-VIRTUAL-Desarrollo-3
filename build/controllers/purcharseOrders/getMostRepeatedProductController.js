"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostRepeatedProduct = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
const productsModel_1 = __importDefault(require("../../models/productsModel"));
const productCategoriesModel_1 = __importDefault(require("../../models/productCategoriesModel"));
const getMostRepeatedProduct = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const orderDetails = yield orderDetailsModel_1.default.findAll({
            include: [{
                    model: productsModel_1.default,
                    include: [{ model: productCategoriesModel_1.default }]
                }]
        });
        const productCount = orderDetails.reduce((acc, detail) => {
            var _a;
            const productId = detail.productId;
            acc[productId] = ((_a = acc[productId]) !== null && _a !== void 0 ? _a : 0) + detail.quanty;
            return acc;
        }, {});
        const sortedProducts = Object.entries(productCount)
            .sort(([, a], [, b]) => b - a);
        const [mostRepeatedProductId] = (_a = sortedProducts[0]) !== null && _a !== void 0 ? _a : [];
        if (!mostRepeatedProductId) {
            res.status(404).json({
                success: false,
                message: 'No se encontraron productos'
            });
            return;
        }
        const mostRepeatedProduct = yield productsModel_1.default.findByPk(mostRepeatedProductId, {
            include: [{ model: productCategoriesModel_1.default }]
        });
        const productDetails = orderDetails
            .filter(detail => detail.productId === parseInt(mostRepeatedProductId))
            .map(detail => ({
            orderId: detail.purcharseOrderId,
            quantity: detail.quanty,
            price: detail.price
        }));
        res.status(200).json({
            success: true,
            data: {
                product: mostRepeatedProduct,
                totalQuantity: productCount[mostRepeatedProductId],
                orderDetails: productDetails
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el producto más repetido',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getMostRepeatedProduct = getMostRepeatedProduct;
//# sourceMappingURL=getMostRepeatedProductController.js.map
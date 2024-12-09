"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const getProductController_1 = require("../controllers/products/getProductController");
const createProductController_1 = require("../controllers/products/createProductController");
const updateProductController_1 = require("../controllers/products/updateProductController");
const deleteProductController_1 = require("../controllers/products/deleteProductController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/api/products', getProductController_1.getProducts);
router.get('/api/products/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], getProductController_1.getProductById);
router.post('/api/products', [
    (0, express_validator_1.body)('name').isString().withMessage('El nombre del producto es requerido'),
    (0, express_validator_1.body)('description').isString().optional(),
    (0, express_validator_1.body)('price').isNumeric().withMessage('El precio es requerido y debe ser un número'),
    (0, express_validator_1.body)('idCategory').isNumeric().withMessage('El ID de la categoría es requerido y debe ser un número'),
], authMiddleware_1.default, createProductController_1.createProduct);
router.put('/api/products/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
    (0, express_validator_1.body)('name').isString().withMessage('El nombre del producto es requerido'),
    (0, express_validator_1.body)('description').isString().optional(),
    (0, express_validator_1.body)('price').isNumeric().withMessage('El precio es requerido y debe ser un número'),
    (0, express_validator_1.body)('idCategory').isNumeric().withMessage('El ID de la categoría es requerido y debe ser un número'),
], authMiddleware_1.default, updateProductController_1.updateProduct);
router.delete('/api/products/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, deleteProductController_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=productsRoutes.js.map
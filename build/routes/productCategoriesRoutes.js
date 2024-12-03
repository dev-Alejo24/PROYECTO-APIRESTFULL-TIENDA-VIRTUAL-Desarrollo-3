"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProductCategoryController_1 = require("../controllers/productCategories/getProductCategoryController");
const createProductCategoryController_1 = require("../controllers/productCategories/createProductCategoryController");
const updateProductCategoryController_1 = require("../controllers/productCategories/updateProductCategoryController");
const deleteProductCategoryController_1 = require("../controllers/productCategories/deleteProductCategoryController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/api/productCategories', getProductCategoryController_1.getProductCategories);
router.get('/api/productCategories/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, getProductCategoryController_1.getProductCategoryById);
router.post('/api/users/productCategories', [
    (0, express_validator_1.body)('categoryName').isString().withMessage('El nombre de la categoría es requerido'),
    (0, express_validator_1.body)('description').isString().optional(),
], authMiddleware_1.default, createProductCategoryController_1.createProductCategory);
router.put('/api/users/productCategories/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
    (0, express_validator_1.body)('categoryName').isString().withMessage('El nombre de la categoría es requerido'),
    (0, express_validator_1.body)('description').isString().optional(),
], authMiddleware_1.default, updateProductCategoryController_1.updateProductCategory);
router.delete('/api/users/productCategories/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, deleteProductCategoryController_1.deleteProductCategory);
exports.default = router;
//# sourceMappingURL=productCategoriesRoutes.js.map
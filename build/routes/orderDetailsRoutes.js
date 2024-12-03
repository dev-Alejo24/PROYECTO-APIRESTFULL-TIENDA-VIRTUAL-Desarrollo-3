"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const getOrderDetailsController_1 = require("../controllers/orderDetails/getOrderDetailsController");
const createOrderDetailsController_1 = require("../controllers/orderDetails/createOrderDetailsController");
const updateOrderDetailsController_1 = require("../controllers/orderDetails/updateOrderDetailsController");
const deleteOrderDetailsController_1 = require("../controllers/orderDetails/deleteOrderDetailsController");
const router = (0, express_1.Router)();
router.get('/api/users/orderDetails', getOrderDetailsController_1.getAllOrderDetails);
router.get('/api/users/orderDetails/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, getOrderDetailsController_1.getOrderDetailById);
router.post('/api/users/orderDetails', [
    (0, express_validator_1.body)('idPurchaseOrder').isNumeric().withMessage('El ID de la orden de compra es requerido y debe ser un número'),
    (0, express_validator_1.body)('idProduct').isNumeric().withMessage('El ID del producto es requerido y debe ser un número'),
    (0, express_validator_1.body)('quantity').isNumeric().withMessage('La cantidad es requerida y debe ser un número'),
    (0, express_validator_1.body)('price').isDecimal().withMessage('El precio es requerido y debe ser un valor decimal'),
], authMiddleware_1.default, createOrderDetailsController_1.createOrderDetail);
router.put('/api/users/orderDetails/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
    (0, express_validator_1.body)('idPurchaseOrder').optional().isNumeric().withMessage('El ID de la orden de compra debe ser un número'),
    (0, express_validator_1.body)('idProduct').optional().isNumeric().withMessage('El ID del producto debe ser un número'),
    (0, express_validator_1.body)('quantity').optional().isNumeric().withMessage('La cantidad debe ser un número'),
    (0, express_validator_1.body)('price').optional().isDecimal().withMessage('El precio debe ser un valor decimal'),
], authMiddleware_1.default, updateOrderDetailsController_1.updateOrderDetail);
router.delete('/api/users/orderDetails/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, deleteOrderDetailsController_1.deleteOrderDetail);
exports.default = router;
//# sourceMappingURL=orderDetailsRoutes.js.map
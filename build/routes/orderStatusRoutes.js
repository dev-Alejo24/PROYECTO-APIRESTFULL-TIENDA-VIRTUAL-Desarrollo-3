"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getOrderStatusController_1 = require("../controllers/orderStatus/getOrderStatusController");
const createOrderStatusController_1 = require("../controllers/orderStatus/createOrderStatusController");
const updateOrderStatusController_1 = require("../controllers/orderStatus/updateOrderStatusController");
const deleteOrderStatusController_1 = require("../controllers/orderStatus/deleteOrderStatusController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/api/users/orderStatus', getOrderStatusController_1.getOrderStatuses);
router.get('/api/users/orderStatus/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, getOrderStatusController_1.getOrderStatusById);
router.post('/api/users/orderStatus', [
    (0, express_validator_1.body)('name').isString().withMessage('El nombre es requerido'),
], authMiddleware_1.default, createOrderStatusController_1.createOrderStatus);
router.put('/api/users/orderStatus/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
    (0, express_validator_1.body)('name').isString().withMessage('El nombre es requerido'),
], authMiddleware_1.default, updateOrderStatusController_1.updateOrderStatus);
router.delete('/api/users/orderStatus/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, deleteOrderStatusController_1.deleteOrderStatus);
exports.default = router;
//# sourceMappingURL=orderStatusRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const getPurchaerseOrdersController_1 = require("../controllers/purcharseOrders/getPurchaerseOrdersController");
const createPurchaerseOrdersController_1 = require("../controllers/purcharseOrders/createPurchaerseOrdersController");
const updatePurchaerseOrdersController_1 = require("../controllers/purcharseOrders/updatePurchaerseOrdersController");
const deletePurchaerseOrdersController_1 = require("../controllers/purcharseOrders/deletePurchaerseOrdersController");
const router = (0, express_1.Router)();
router.get('/api/users/purchaseOrders', getPurchaerseOrdersController_1.getAllPurchaseOrders);
router.get('/api/users/purchaseOrders/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, getPurchaerseOrdersController_1.getPurchaseOrderById);
router.post('/api/users/purchaseOrders', [
    (0, express_validator_1.body)('idSupplier').isNumeric().withMessage('El ID del proveedor es requerido y debe ser un número'),
    (0, express_validator_1.body)('idStatus').isNumeric().withMessage('El ID del estado es requerido y debe ser un número'),
], authMiddleware_1.default, createPurchaerseOrdersController_1.createPurchaseOrder);
router.put('/api/users/purchaseOrders/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
    (0, express_validator_1.body)('idSupplier').optional().isNumeric().withMessage('El ID del proveedor debe ser un número'),
    (0, express_validator_1.body)('idStatus').optional().isNumeric().withMessage('El ID del estado debe ser un número'),
], authMiddleware_1.default, updatePurchaerseOrdersController_1.updatePurchaseOrder);
router.delete('/api/users/purchaseOrders/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware_1.default, deletePurchaerseOrdersController_1.deletePurchaseOrder);
exports.default = router;
//# sourceMappingURL=purchareOrdesRoutes.js.map
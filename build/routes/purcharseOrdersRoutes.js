"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPurchaseOrder_1 = require("../controllers/purcharseOrders/createPurchaseOrder");
const getPurchaseOrders_1 = require("../controllers/purcharseOrders/getPurchaseOrders");
const getPurchaseOrderById_1 = require("../controllers/purcharseOrders/getPurchaseOrderById");
const updatePurchaseOrder_1 = require("../controllers/purcharseOrders/updatePurchaseOrder");
const deletePurchaseOrder_1 = require("../controllers/purcharseOrders/deletePurchaseOrder");
const router = (0, express_1.Router)();
router.post('/', createPurchaseOrder_1.createPurchaseOrder);
router.get('/', getPurchaseOrders_1.getPurchaseOrders);
router.get('/:id', getPurchaseOrderById_1.getPurchaseOrderById);
router.put('/:id', updatePurchaseOrder_1.updatePurchaseOrder);
router.delete('/:id', deletePurchaseOrder_1.deletePurchaseOrder);
exports.default = router;
//# sourceMappingURL=purcharseOrdersRoutes.js.map
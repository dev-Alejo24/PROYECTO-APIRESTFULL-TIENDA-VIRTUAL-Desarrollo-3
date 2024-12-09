"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const calculateTotalOrderStatusController_1 = require("../controllers/orderStatus/calculateTotalOrderStatusController");
const getSupplierPurchaseOrdersController_1 = require("../controllers/purcharseOrders/getSupplierPurchaseOrdersController");
const updateOrderStatusController_1 = require("../controllers/purcharseOrders/updateOrderStatusController");
const getTotalPurchaseOrderController_1 = require("../controllers/purcharseOrders/getTotalPurchaseOrderController");
const getTotalProductsByStatusController_1 = require("../controllers/orderStatus/getTotalProductsByStatusController");
const getProductDetailsWithCategoryController_1 = require("../controllers/purcharseOrders/getProductDetailsWithCategoryController");
const getOrderStatusBySupplierController_1 = require("../controllers/purcharseOrders/getOrderStatusBySupplierController");
const deleteProductFromOrderController_1 = require("../controllers/purcharseOrders/deleteProductFromOrderController");
const addProductToOrderController_1 = require("../controllers/purcharseOrders/addProductToOrderController");
const getMostRepeatedProductController_1 = require("../controllers/purcharseOrders/getMostRepeatedProductController");
const router = (0, express_1.Router)();
router.get('/api/orderStatus/total', calculateTotalOrderStatusController_1.calculateTotalOrderStatus);
router.get('/api/purchase-orders/supplier/:supplierId', getSupplierPurchaseOrdersController_1.getSupplierPurchaseOrders);
router.put('/api/purchase-orders/:orderId/status', [
    (0, express_validator_1.param)('orderId').isNumeric().withMessage('El ID de la orden debe ser un número'),
    (0, express_validator_1.body)('statusId').isNumeric().withMessage('El ID del estado debe ser un número')
], updateOrderStatusController_1.updateOrderStatus);
router.get('/api/purchase-orders/:orderId/total', getTotalPurchaseOrderController_1.getTotalPurchaseOrder);
router.get('/api/purchase-orders/products/by-status', getTotalProductsByStatusController_1.getTotalProductsByStatus);
router.get('/api/purchase-orders/:orderId/products/with-category', getProductDetailsWithCategoryController_1.getProductDetailsWithCategory);
router.get('/api/purchase-orders/status/by-supplier/:supplierId', getOrderStatusBySupplierController_1.getOrderStatusBySupplier);
router.delete('/api/purchase-orders/:orderId/products/:productId', [
    (0, express_validator_1.param)('orderId').isNumeric().withMessage('El ID de la orden debe ser un número'),
    (0, express_validator_1.param)('productId').isNumeric().withMessage('El ID del producto debe ser un número')
], deleteProductFromOrderController_1.deleteProductFromOrder);
router.post('/api/purchase-orders/:orderId/products', [
    (0, express_validator_1.param)('orderId').isNumeric().withMessage('El ID de la orden debe ser un número'),
    (0, express_validator_1.body)('productId').isNumeric().withMessage('El ID del producto debe ser un número'),
    (0, express_validator_1.body)('quanty').isNumeric().withMessage('La cantidad debe ser un número'),
    (0, express_validator_1.body)('price').isNumeric().withMessage('El precio debe ser un número')
], addProductToOrderController_1.addProductToOrder);
router.get('/api/purchase-orders/products/most-repeated', getMostRepeatedProductController_1.getMostRepeatedProduct);
exports.default = router;
//# sourceMappingURL=purchaseOrderRoutes.new.js.map
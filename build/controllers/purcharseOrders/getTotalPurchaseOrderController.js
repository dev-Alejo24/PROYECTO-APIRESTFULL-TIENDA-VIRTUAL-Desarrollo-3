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
exports.getTotalPurchaseOrder = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
const productsModel_1 = __importDefault(require("../../models/productsModel"));
const getTotalPurchaseOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const orderDetails = yield orderDetailsModel_1.default.findAll({
            where: { purchaseOrderId: orderId },
            include: [{ model: productsModel_1.default }]
        });
        const total = orderDetails.reduce((acc, detail) => {
            return acc + (detail.quanty * detail.Product.price);
        }, 0);
        res.status(200).json({
            success: true,
            data: {
                orderId,
                total
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al calcular el total de la orden de compra',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getTotalPurchaseOrder = getTotalPurchaseOrder;
//# sourceMappingURL=getTotalPurchaseOrderController.js.map
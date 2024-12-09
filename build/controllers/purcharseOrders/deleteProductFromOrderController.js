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
exports.deleteProductFromOrder = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
const deleteProductFromOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId, productId } = req.params;
        const deleted = yield orderDetailsModel_1.default.destroy({
            where: {
                purcharseOrderId: orderId,
                productId
            }
        });
        if (!deleted) {
            res.status(404).json({
                success: false,
                message: 'Producto no encontrado en la orden'
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Producto eliminado de la orden exitosamente'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el producto de la orden',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.deleteProductFromOrder = deleteProductFromOrder;
//# sourceMappingURL=deleteProductFromOrderController.js.map
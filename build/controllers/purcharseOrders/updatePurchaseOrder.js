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
exports.updatePurchaseOrder = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const updatePurchaseOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const [updated] = yield purcharseOrdersModel_1.default.update(req.body, {
            where: { id }
        });
        if (!updated) {
            res.status(404).json({
                success: false,
                message: 'Orden de compra no encontrada'
            });
            return;
        }
        const updatedOrder = yield purcharseOrdersModel_1.default.findByPk(id);
        res.status(200).json({
            success: true,
            message: 'Orden de compra actualizada exitosamente',
            data: updatedOrder
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la orden de compra',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.updatePurchaseOrder = updatePurchaseOrder;
//# sourceMappingURL=updatePurchaseOrder.js.map
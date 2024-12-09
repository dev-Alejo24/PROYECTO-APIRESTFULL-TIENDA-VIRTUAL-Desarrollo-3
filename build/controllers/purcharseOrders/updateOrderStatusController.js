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
exports.updateOrderStatus = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const orderStatusModel_1 = __importDefault(require("../../models/orderStatusModel"));
const updateOrderStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const { statusId } = req.body;
        const statusExists = yield orderStatusModel_1.default.findByPk(statusId);
        if (!statusExists) {
            res.status(404).json({
                success: false,
                message: 'El estado de orden especificado no existe'
            });
            return;
        }
        const [updated] = yield purcharseOrdersModel_1.default.update({ statusId }, { where: { id: orderId } });
        if (!updated) {
            res.status(404).json({
                success: false,
                message: 'Orden de compra no encontrada'
            });
            return;
        }
        const updatedOrder = yield purcharseOrdersModel_1.default.findByPk(orderId, {
            include: [{ model: orderStatusModel_1.default }]
        });
        res.status(200).json({
            success: true,
            message: 'Estado de la orden actualizado exitosamente',
            data: updatedOrder
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el estado de la orden',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.updateOrderStatus = updateOrderStatus;
//# sourceMappingURL=updateOrderStatusController.js.map
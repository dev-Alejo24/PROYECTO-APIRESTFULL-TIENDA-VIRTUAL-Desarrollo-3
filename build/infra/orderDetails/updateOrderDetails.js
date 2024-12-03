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
exports.UpdateOrderDetailsSql = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
class UpdateOrderDetailsSql {
    updateOrderDetail(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderDetail = yield orderDetailsModel_1.default.findByPk(id);
                if (!orderDetail) {
                    throw new Error('Detalle del pedido no encontrado.');
                }
                yield orderDetail.update(data);
                return orderDetail;
            }
            catch (error) {
                console.error('Error actualizando el detalle del pedido:', error);
                throw new Error('No se pudo actualizar el detalle del pedido.');
            }
        });
    }
}
exports.UpdateOrderDetailsSql = UpdateOrderDetailsSql;
//# sourceMappingURL=updateOrderDetails.js.map
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
exports.DeleteOrderDetailsSql = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
class DeleteOrderDetailsSql {
    deleteOrderDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderDetail = yield orderDetailsModel_1.default.findByPk(id);
                if (!orderDetail) {
                    throw new Error('Detalle del pedido no encontrado.');
                }
                yield orderDetail.destroy();
            }
            catch (error) {
                console.error('Error eliminando el detalle del pedido:', error);
                throw new Error('No se pudo eliminar el detalle del pedido.');
            }
        });
    }
}
exports.DeleteOrderDetailsSql = DeleteOrderDetailsSql;
//# sourceMappingURL=deleteOrderDetails.js.map
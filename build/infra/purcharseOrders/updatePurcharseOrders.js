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
exports.UpdatePurchaseOrdersSql = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
class UpdatePurchaseOrdersSql {
    updatePurchaseOrder(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchaseOrder = yield purcharseOrdersModel_1.default.findByPk(id);
                if (!purchaseOrder) {
                    throw new Error('Orden de compra no encontrada.');
                }
                yield purchaseOrder.update(data);
                return purchaseOrder;
            }
            catch (error) {
                console.error('Error actualizando la orden de compra:', error);
                throw new Error('No se pudo actualizar la orden de compra.');
            }
        });
    }
}
exports.UpdatePurchaseOrdersSql = UpdatePurchaseOrdersSql;
//# sourceMappingURL=updatePurcharseOrders.js.map
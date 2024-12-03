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
exports.CreatePurchaseOrdersSql = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
class CreatePurchaseOrdersSql {
    createPurchaseOrder(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchaseOrder = yield purcharseOrdersModel_1.default.create(data);
                return purchaseOrder;
            }
            catch (error) {
                console.error('Error creando la orden de compra:', error);
                throw new Error('No se pudo crear la orden de compra.');
            }
        });
    }
}
exports.CreatePurchaseOrdersSql = CreatePurchaseOrdersSql;
//# sourceMappingURL=createPurcharseOrders.js.map
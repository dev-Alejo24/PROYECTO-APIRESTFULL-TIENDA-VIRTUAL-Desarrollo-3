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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePurchaseOrdersService = void 0;
const deletePurcharseOrders_1 = require("../../infra/purcharseOrders/deletePurcharseOrders");
class DeletePurchaseOrdersService {
    constructor() {
        this.purchaseOrdersSql = new deletePurcharseOrders_1.DeletePurchaseOrdersSql();
    }
    deletePurchaseOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('El ID es requerido.');
            yield this.purchaseOrdersSql.deletePurchaseOrder(id);
        });
    }
}
exports.DeletePurchaseOrdersService = DeletePurchaseOrdersService;
//# sourceMappingURL=deletePurcharseOrdersService.js.map
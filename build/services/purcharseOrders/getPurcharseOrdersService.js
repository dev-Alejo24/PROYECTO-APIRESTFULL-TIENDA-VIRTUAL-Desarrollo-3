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
exports.GetPurchaseOrdersService = void 0;
const getPurcharseOrders_1 = require("../../infra/purcharseOrders/getPurcharseOrders");
class GetPurchaseOrdersService {
    constructor() {
        this.purchaseOrdersSql = new getPurcharseOrders_1.GetPurchaseOrdersSql();
    }
    getAllPurchaseOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.purchaseOrdersSql.fetchAllPurchaseOrders();
        });
    }
    getPurchaseOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('El ID es requerido.');
            return yield this.purchaseOrdersSql.fetchPurchaseOrderById(id);
        });
    }
}
exports.GetPurchaseOrdersService = GetPurchaseOrdersService;
//# sourceMappingURL=getPurcharseOrdersService.js.map
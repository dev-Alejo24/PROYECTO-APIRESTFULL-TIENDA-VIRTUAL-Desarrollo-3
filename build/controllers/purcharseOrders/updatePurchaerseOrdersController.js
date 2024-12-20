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
exports.updatePurchaseOrder = void 0;
const updatePurcharseOrdersService_1 = require("../../services/purcharseOrders/updatePurcharseOrdersService");
const service = new updatePurcharseOrdersService_1.UpdatePurchaseOrdersService();
const updatePurchaseOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedOrder = yield service.updatePurchaseOrder(id, data);
        res.status(200).json(updatedOrder);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updatePurchaseOrder = updatePurchaseOrder;
//# sourceMappingURL=updatePurchaerseOrdersController.js.map
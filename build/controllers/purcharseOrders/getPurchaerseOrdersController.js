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
exports.getPurchaseOrderById = exports.getAllPurchaseOrders = void 0;
const getPurcharseOrdersService_1 = require("../../services/purcharseOrders/getPurcharseOrdersService");
const service = new getPurcharseOrdersService_1.GetPurchaseOrdersService();
const getAllPurchaseOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield service.getAllPurchaseOrders();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllPurchaseOrders = getAllPurchaseOrders;
const getPurchaseOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const order = yield service.getPurchaseOrderById(id);
        res.status(200).json(order);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getPurchaseOrderById = getPurchaseOrderById;
//# sourceMappingURL=getPurchaerseOrdersController.js.map
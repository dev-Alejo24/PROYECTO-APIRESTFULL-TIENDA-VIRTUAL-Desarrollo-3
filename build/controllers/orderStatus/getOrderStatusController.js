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
exports.getOrderStatusById = exports.getOrderStatuses = void 0;
const getOrderStatusService_1 = require("../../services/orderStatus/getOrderStatusService");
const getOrderStatuses = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = new getOrderStatusService_1.GetOrderStatusService();
        const statuses = yield service.getAllOrderStatuses();
        res.status(200).json(statuses);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getOrderStatuses = getOrderStatuses;
const getOrderStatusById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const service = new getOrderStatusService_1.GetOrderStatusService();
        const status = yield service.getOrderStatusById(Number(id));
        res.status(200).json(status);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getOrderStatusById = getOrderStatusById;
//# sourceMappingURL=getOrderStatusController.js.map
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
exports.updateOrderStatus = void 0;
const updateOrderStatusService_1 = require("../../services/orderStatus/updateOrderStatusService");
const updateOrderStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const service = new updateOrderStatusService_1.UpdateOrderStatusService();
        const updatedStatus = yield service.updateOrderStatus(Number(id), { name });
        res.status(200).json(updatedStatus);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateOrderStatus = updateOrderStatus;
//# sourceMappingURL=updateOrderStatusController.js.map
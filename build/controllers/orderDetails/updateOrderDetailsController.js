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
exports.updateOrderDetail = void 0;
const updateOrderDetailsService_1 = require("../../services/orderDetails/updateOrderDetailsService");
const service = new updateOrderDetailsService_1.UpdateOrderDetailsService();
const updateOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedDetail = yield service.updateOrderDetail(id, data);
        res.status(200).json(updatedDetail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateOrderDetail = updateOrderDetail;
//# sourceMappingURL=updateOrderDetailsController.js.map
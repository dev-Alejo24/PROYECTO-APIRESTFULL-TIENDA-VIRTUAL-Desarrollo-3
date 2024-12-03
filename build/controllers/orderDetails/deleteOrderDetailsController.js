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
exports.deleteOrderDetail = void 0;
const deleteOrderDetailsService_1 = require("../../services/orderDetails/deleteOrderDetailsService");
const service = new deleteOrderDetailsService_1.DeleteOrderDetailsService();
const deleteOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        yield service.deleteOrderDetail(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteOrderDetail = deleteOrderDetail;
//# sourceMappingURL=deleteOrderDetailsController.js.map
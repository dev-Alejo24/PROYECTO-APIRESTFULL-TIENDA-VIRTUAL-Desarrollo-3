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
exports.getOrderDetailById = exports.getAllOrderDetails = void 0;
const getOrderDetailsService_1 = require("../../services/orderDetails/getOrderDetailsService");
const service = new getOrderDetailsService_1.GetOrderDetailsService();
const getAllOrderDetails = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield service.getAllOrderDetails();
        res.status(200).json(details);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllOrderDetails = getAllOrderDetails;
const getOrderDetailById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const detail = yield service.getOrderDetailById(id);
        res.status(200).json(detail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getOrderDetailById = getOrderDetailById;
//# sourceMappingURL=getOrderDetailsController.js.map
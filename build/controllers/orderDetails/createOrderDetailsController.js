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
exports.createOrderDetail = void 0;
const createOrderDetailsService_1 = require("../../services/orderDetails/createOrderDetailsService");
const service = new createOrderDetailsService_1.CreateOrderDetailsService();
const createOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newDetail = yield service.createOrderDetail(data);
        res.status(201).json(newDetail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createOrderDetail = createOrderDetail;
//# sourceMappingURL=createOrderDetailsController.js.map
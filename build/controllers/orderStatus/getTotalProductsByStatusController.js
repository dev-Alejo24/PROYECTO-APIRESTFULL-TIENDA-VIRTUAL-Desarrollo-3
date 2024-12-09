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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalProductsByStatus = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const orderStatusModel_1 = __importDefault(require("../../models/orderStatusModel"));
const getTotalProductsByStatus = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield purcharseOrdersModel_1.default.findAll({
            include: [
                {
                    model: orderDetailsModel_1.default,
                    attributes: ['quanty']
                },
                {
                    model: orderStatusModel_1.default,
                    attributes: ['name']
                }
            ]
        });
        const totalsByStatus = orders.reduce((acc, order) => {
            const statusName = order.OrderStatus.name;
            const totalProducts = order.OrderDetails.reduce((sum, detail) => {
                return sum + detail.quanty;
            }, 0);
            acc[statusName] = (acc[statusName] || 0) + totalProducts;
            return acc;
        }, {});
        res.status(200).json({
            success: true,
            data: totalsByStatus
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el total de productos por estado',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getTotalProductsByStatus = getTotalProductsByStatus;
//# sourceMappingURL=getTotalProductsByStatusController.js.map
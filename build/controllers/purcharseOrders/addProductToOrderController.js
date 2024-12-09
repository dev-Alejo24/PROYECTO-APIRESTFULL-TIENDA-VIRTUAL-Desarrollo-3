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
exports.addProductToOrder = void 0;
const orderDetailsModel_1 = __importDefault(require("../../models/orderDetailsModel"));
const productsModel_1 = __importDefault(require("../../models/productsModel"));
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const addProductToOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const { productId, quanty, price } = req.body;
        const orderExists = yield purcharseOrdersModel_1.default.findByPk(orderId);
        if (!orderExists) {
            res.status(404).json({
                success: false,
                message: 'Orden de compra no encontrada'
            });
            return;
        }
        const productExists = yield productsModel_1.default.findByPk(productId);
        if (!productExists) {
            res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            });
            return;
        }
        const newOrderDetail = yield orderDetailsModel_1.default.create({
            purcharseOrderId: orderId,
            productId,
            quanty,
            price
        });
        const orderDetailWithProduct = yield orderDetailsModel_1.default.findByPk(newOrderDetail.id, {
            include: [{ model: productsModel_1.default }]
        });
        res.status(201).json({
            success: true,
            message: 'Producto agregado a la orden exitosamente',
            data: orderDetailWithProduct
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al agregar el producto a la orden',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.addProductToOrder = addProductToOrder;
//# sourceMappingURL=addProductToOrderController.js.map
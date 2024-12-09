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
exports.getOrderStatusBySupplier = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const orderStatusModel_1 = __importDefault(require("../../models/orderStatusModel"));
const getOrderStatusBySupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { supplierId } = req.params;
        const orders = yield purcharseOrdersModel_1.default.findAll({
            where: { supplierId },
            include: [{ model: orderStatusModel_1.default }]
        });
        res.status(200).json({
            success: true,
            data: orders
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el estado de las órdenes de compra por proveedor',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getOrderStatusBySupplier = getOrderStatusBySupplier;
//# sourceMappingURL=getOrderStatusBySupplierController.js.map
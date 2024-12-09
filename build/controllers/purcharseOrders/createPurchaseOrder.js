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
exports.createPurchaseOrder = void 0;
const purcharseOrdersModel_1 = __importDefault(require("../../models/purcharseOrdersModel"));
const createPurchaseOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { supplierId, statusId } = req.body;
        const newOrder = yield purcharseOrdersModel_1.default.create({
            supplierId,
            statusId
        });
        res.status(201).json({
            success: true,
            message: 'Orden de compra creada exitosamente',
            data: newOrder
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la orden de compra',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.createPurchaseOrder = createPurchaseOrder;
//# sourceMappingURL=createPurchaseOrder.js.map
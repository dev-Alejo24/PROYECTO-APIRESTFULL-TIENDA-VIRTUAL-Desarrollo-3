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
exports.calculateTotalOrderStatus = void 0;
const orderStatusModel_1 = __importDefault(require("../../models/orderStatusModel"));
const calculateTotalOrderStatus = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = yield orderStatusModel_1.default.count();
        res.status(200).json({
            success: true,
            data: {
                total
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al calcular el total de estados de orden',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.calculateTotalOrderStatus = calculateTotalOrderStatus;
//# sourceMappingURL=calculateTotalOrderStatusController.js.map
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
exports.deleteProduct = void 0;
const deleteProductService_1 = require("../../services/products/deleteProductService");
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const service = new deleteProductService_1.DeleteProductService();
        yield service.deleteProduct(Number(id));
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProductController.js.map
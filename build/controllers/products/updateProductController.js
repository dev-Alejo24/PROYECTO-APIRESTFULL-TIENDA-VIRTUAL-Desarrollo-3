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
exports.updateProduct = void 0;
const updateProductService_1 = require("../../services/products/updateProductService");
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description, price, idCategory, } = req.body;
        const service = new updateProductService_1.UpdateProductService();
        const updatedProduct = yield service.updateProduct(Number(id), {
            name, description, price, idCategory,
        });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProductController.js.map
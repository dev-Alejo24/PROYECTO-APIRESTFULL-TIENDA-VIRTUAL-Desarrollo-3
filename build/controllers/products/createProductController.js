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
exports.createProduct = void 0;
const createProductService_1 = require("../../services/products/createProductService");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, idCategory } = req.body;
        const service = new createProductService_1.CreateProductService();
        const newProduct = yield service.createProduct({ name, description, price, idCategory });
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createProduct = createProduct;
//# sourceMappingURL=createProductController.js.map
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
exports.getProductById = exports.getProducts = void 0;
const getProductService_1 = require("../../services/products/getProductService");
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = new getProductService_1.GetProductService();
        const products = yield service.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const service = new getProductService_1.GetProductService();
        const product = yield service.getProductById(Number(id));
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProductById = getProductById;
//# sourceMappingURL=getProductController.js.map
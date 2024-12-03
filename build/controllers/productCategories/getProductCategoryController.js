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
exports.getProductCategoryById = exports.getProductCategories = void 0;
const getProductCategoryService_1 = require("../../services/productCategories/getProductCategoryService");
const getProductCategories = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = new getProductCategoryService_1.GetProductCategoryService();
        const categories = yield service.getAllProductCategories();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProductCategories = getProductCategories;
const getProductCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const service = new getProductCategoryService_1.GetProductCategoryService();
        const category = yield service.getProductCategoryById(Number(id));
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getProductCategoryById = getProductCategoryById;
//# sourceMappingURL=getProductCategoryController.js.map
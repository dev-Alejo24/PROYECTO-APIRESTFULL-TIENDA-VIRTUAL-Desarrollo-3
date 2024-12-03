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
exports.createProductCategory = void 0;
const createProductCategoryService_1 = require("../../services/productCategories/createProductCategoryService");
const createProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryName, description } = req.body;
        const service = new createProductCategoryService_1.CreateProductCategoryService();
        const newCategory = yield service.createProductCategory({ categoryName, description });
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createProductCategory = createProductCategory;
//# sourceMappingURL=createProductCategoryController.js.map
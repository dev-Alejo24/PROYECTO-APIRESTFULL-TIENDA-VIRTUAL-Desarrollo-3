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
exports.updateProductCategory = void 0;
const updateProductCategoryService_1 = require("../../services/productCategories/updateProductCategoryService");
const updateProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { categoryName, description } = req.body;
        const service = new updateProductCategoryService_1.UpdateProductCategoryService();
        const updatedCategory = yield service.updateProductCategory(Number(id), { categoryName, description });
        res.status(200).json(updatedCategory);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateProductCategory = updateProductCategory;
//# sourceMappingURL=updateProductCategoryController.js.map
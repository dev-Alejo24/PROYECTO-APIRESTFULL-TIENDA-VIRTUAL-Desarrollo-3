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
exports.CreateProductCategoryService = void 0;
const createProductCategorySql_1 = require("../../infra/productCategories/createProductCategorySql");
class CreateProductCategoryService {
    createProductCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorySql = new createProductCategorySql_1.CreateProductCategorySql();
            return yield categorySql.createProductCategorySql(data);
        });
    }
}
exports.CreateProductCategoryService = CreateProductCategoryService;
//# sourceMappingURL=createProductCategoryService.js.map
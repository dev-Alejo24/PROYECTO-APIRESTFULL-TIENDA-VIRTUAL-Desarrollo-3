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
exports.UpdateProductService = void 0;
const updateProductSql_1 = require("../../infra/products/updateProductSql");
class UpdateProductService {
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const productSql = new updateProductSql_1.UpdateProductSql();
            return productSql.updateProductSql(id, data);
        });
    }
}
exports.UpdateProductService = UpdateProductService;
//# sourceMappingURL=updateProductService.js.map
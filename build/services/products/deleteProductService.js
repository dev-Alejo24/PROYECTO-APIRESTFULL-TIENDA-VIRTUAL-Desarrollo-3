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
exports.DeleteProductService = void 0;
const deleteProductSql_1 = require("../../infra/products/deleteProductSql");
class DeleteProductService {
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productSql = new deleteProductSql_1.DeleteProductSql();
            return productSql.deleteProductSql(id);
        });
    }
}
exports.DeleteProductService = DeleteProductService;
//# sourceMappingURL=deleteProductService.js.map
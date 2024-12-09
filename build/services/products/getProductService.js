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
exports.GetProductService = void 0;
const getProductSql_1 = require("../../infra/products/getProductSql");
class GetProductService {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const productSql = new getProductSql_1.GetProductSql();
            return productSql.getProductsSql();
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productSql = new getProductSql_1.GetProductSql();
            return productSql.getProductByIdSql(id);
        });
    }
}
exports.GetProductService = GetProductService;
//# sourceMappingURL=getProductService.js.map
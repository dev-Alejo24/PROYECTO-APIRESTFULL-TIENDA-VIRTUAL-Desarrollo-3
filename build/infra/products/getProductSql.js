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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductSql = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class GetProductSql {
    getProductsSql() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT p.*, c.categoryName 
                   FROM products p 
                   INNER JOIN productCategories c ON p.idCategory = c.id`;
            return yield database_1.default.query(query, { type: sequelize_1.QueryTypes.SELECT });
        });
    }
    getProductByIdSql(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM products WHERE id = :id";
            const [result] = yield database_1.default.query(query, {
                replacements: { id },
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result || null;
        });
    }
}
exports.GetProductSql = GetProductSql;
//# sourceMappingURL=getProductSql.js.map
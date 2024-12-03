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
exports.CreateProductCategorySql = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class CreateProductCategorySql {
    createProductCategorySql(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO productCategories (categoryName, description, createdAt, updatedAt) VALUES (:categoryName, :description, NOW(), NOW())";
            return yield database_1.default.query(query, {
                replacements: data,
                type: sequelize_1.QueryTypes.INSERT,
            });
        });
    }
}
exports.CreateProductCategorySql = CreateProductCategorySql;
//# sourceMappingURL=createProductCategorySql.js.map
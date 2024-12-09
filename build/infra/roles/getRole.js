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
exports.GetRoleSql = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
class GetRoleSql {
    getRolesSql() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM roles';
            const roles = yield database_1.default.query(query, { type: sequelize_1.QueryTypes.SELECT });
            return roles;
        });
    }
    getRoleByIdSql(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM roles WHERE id = :roleId';
            const role = yield database_1.default.query(query, {
                replacements: { roleId },
                type: sequelize_1.QueryTypes.SELECT,
            });
            return role.length > 0 ? role[0] : null;
        });
    }
    countRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT COUNT(*) as total FROM roles';
            const result = yield database_1.default.query(query, { type: sequelize_1.QueryTypes.SELECT });
            return result[0].total;
        });
    }
    getRolesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM roles WHERE LOWER(name) LIKE LOWER(:name)';
            const roles = yield database_1.default.query(query, {
                replacements: { name: `%${name}%` },
                type: sequelize_1.QueryTypes.SELECT,
            });
            return roles;
        });
    }
}
exports.GetRoleSql = GetRoleSql;
//# sourceMappingURL=getRole.js.map
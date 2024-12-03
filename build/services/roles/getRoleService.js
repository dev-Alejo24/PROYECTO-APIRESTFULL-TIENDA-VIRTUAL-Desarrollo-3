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
exports.GetRoleService = void 0;
const getRole_1 = require("../../infra/roles/getRole");
class GetRoleService {
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const getRoleSql = new getRole_1.GetRoleSql();
            const roles = yield getRoleSql.getRolesSql();
            return roles;
        });
    }
    getRoleById(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getRoleSql = new getRole_1.GetRoleSql();
            const role = yield getRoleSql.getRoleByIdSql(roleId);
            if (!role) {
                throw new Error('Rol no encontrado');
            }
            return role;
        });
    }
}
exports.GetRoleService = GetRoleService;
//# sourceMappingURL=getRoleService.js.map
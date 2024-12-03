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
exports.DeleteUserRoleService = void 0;
const deleteUserRole_1 = require("../../infra/userRoles/deleteUserRole");
class DeleteUserRoleService {
    deleteUserRole(userId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ userId, roleId }, 'Parámetros para eliminar');
            const deleteRole = new deleteUserRole_1.DeleteUserRoleSql();
            const affectedRows = yield deleteRole.deleteUserRoleSql(userId, roleId);
            if (!affectedRows) {
                throw new Error('No se encontró la relación usuario-rol para eliminar.');
            }
            return affectedRows;
        });
    }
}
exports.DeleteUserRoleService = DeleteUserRoleService;
//# sourceMappingURL=deleteUserRoleService.js.map
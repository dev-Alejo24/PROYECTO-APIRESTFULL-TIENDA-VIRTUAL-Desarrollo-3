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
exports.UpdateUserRolesService = void 0;
const updateUserRoles_1 = require("../../infra/userRoles/updateUserRoles");
const getUserRole_1 = require("../../infra/userRoles/getUserRole");
class UpdateUserRolesService {
    updateUserRoles(userId, roleIds) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ userId, roleIds }, 'Datos para actualizar');
            const getUserRoles = new getUserRole_1.GetUserRolesSql();
            const existingRoles = yield getUserRoles.getUserRolesSql(userId);
            if (!existingRoles.length) {
                throw new Error('El usuario no tiene roles existentes. No se puede realizar la actualización.');
            }
            const updateRoles = new updateUserRoles_1.UpdateUserRolesSql();
            const updatedCount = yield updateRoles.updateUserRolesSql(userId, roleIds);
            return updatedCount;
        });
    }
}
exports.UpdateUserRolesService = UpdateUserRolesService;
//# sourceMappingURL=updateUserRoleService.js.map
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
exports.GetUserRolesService = void 0;
const getUserRole_1 = require("../../infra/userRoles/getUserRole");
class GetUserRolesService {
    getUserRoles(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId, 'userId recibido');
            const userRoles = new getUserRole_1.GetUserRolesSql();
            const roles = yield userRoles.getUserRolesSql(userId);
            if (!roles.length) {
                throw new Error('No se encontraron roles para el usuario.');
            }
            return roles;
        });
    }
}
exports.GetUserRolesService = GetUserRolesService;
//# sourceMappingURL=getUserRoleService.js.map
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
exports.CreateRoleService = void 0;
const createRoles_1 = require("../../infra/roles/createRoles");
class CreateRoleService {
    createRole(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const createRoleSql = new createRoles_1.CreateRoleSql();
            const newRole = yield createRoleSql.createRoleSql(roleData);
            return newRole;
        });
    }
}
exports.CreateRoleService = CreateRoleService;
//# sourceMappingURL=createRoleService.js.map
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
exports.UpdateUserRolesSql = void 0;
const userRolesModel_1 = __importDefault(require("../../models/userRolesModel"));
const rolesModel_1 = __importDefault(require("../../models/rolesModel"));
const database_1 = __importDefault(require("../../config/database"));
class UpdateUserRolesSql {
    updateUserRolesSql(userId, roleIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_1.default.transaction();
            try {
                const validRoles = yield rolesModel_1.default.findAll({
                    where: { id: roleIds },
                    attributes: ['id'],
                });
                if (validRoles.length !== roleIds.length) {
                    throw new Error('Uno o más IDs de roles no son válidos.');
                }
                yield userRolesModel_1.default.destroy({
                    where: { userId },
                    transaction,
                });
                const newRoles = roleIds.map((roleId) => ({
                    userId,
                    roleId,
                }));
                yield userRolesModel_1.default.bulkCreate(newRoles, { transaction });
                yield transaction.commit();
                return roleIds.length;
            }
            catch (error) {
                console.error('Error actualizando roles de usuario:', error);
                yield transaction.rollback();
                throw new Error('No se pudieron actualizar los roles del usuario.');
            }
        });
    }
}
exports.UpdateUserRolesSql = UpdateUserRolesSql;
//# sourceMappingURL=updateUserRoles.js.map
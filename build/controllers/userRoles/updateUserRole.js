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
exports.updateUserRoles = void 0;
const updateUserRoleService_1 = require("../../services/userRoles/updateUserRoleService");
const updateUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params ? Number(req.params.userId) : null;
        const { roleIds } = req.body;
        if (isNaN(userId)) {
            return res.status(400).json({ error: 'El ID del usuario no es válido.' });
        }
        if (!Array.isArray(roleIds) || !roleIds.every(Number.isInteger)) {
            return res.status(400).json({ error: 'roleIds debe ser un array de números válidos.' });
        }
        const userRoleService = new updateUserRoleService_1.UpdateUserRolesService();
        const updatedCount = yield userRoleService.updateUserRoles(userId, roleIds);
        res.status(200).json({ message: 'Roles actualizados correctamente.', updatedCount });
    }
    catch (error) {
        console.error('Error en updateUserRoles:', error);
        res.status(500).json({ error: error.message || 'Error interno del servidor.' });
    }
});
exports.updateUserRoles = updateUserRoles;
//# sourceMappingURL=updateUserRole.js.map
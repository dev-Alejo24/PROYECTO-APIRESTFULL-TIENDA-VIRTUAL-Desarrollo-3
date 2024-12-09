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
exports.deleteRole = void 0;
const deleteRoleService_1 = require("../../services/roles/deleteRoleService");
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleId = req.params ? Number(req.params.roleId) : null;
        if (roleId === null) {
            res.status(400).json({ error: 'ID del rol no proporcionado' });
            return;
        }
        const roleService = new deleteRoleService_1.DeleteRoleService();
        const deletedCount = yield roleService.deleteRole(roleId);
        if (deletedCount > 0) {
            res.status(200).json({ message: 'Rol eliminado', deletedCount });
        }
        else {
            res.status(404).json({ error: 'Rol no encontrado' });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteRole = deleteRole;
//# sourceMappingURL=deleteRoleController.js.map
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
exports.deleteUserRole = void 0;
const deleteUserRoleService_1 = require("../../services/userRoles/deleteUserRoleService");
const deleteUserRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, roleId } = req.params;
        const userRoleService = new deleteUserRoleService_1.DeleteUserRoleService();
        const deletedRows = yield userRoleService.deleteUserRole(Number(userId), Number(roleId));
        res.status(200).json({ message: 'Rol eliminado', deletedRows });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteUserRole = deleteUserRole;
//# sourceMappingURL=deleteUserRole.js.map
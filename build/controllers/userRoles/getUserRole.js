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
exports.getUserRoles = void 0;
const getUserRoleService_1 = require("../../services/userRoles/getUserRoleService");
const getUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = ((_a = req.params) === null || _a === void 0 ? void 0 : _a.userId) ? Number(req.params.userId) : undefined;
        const userRoleService = new getUserRoleService_1.GetUserRolesService();
        const roles = yield userRoleService.getUserRoles(userId);
        res.status(200).json({ roles });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUserRoles = getUserRoles;
//# sourceMappingURL=getUserRole.js.map
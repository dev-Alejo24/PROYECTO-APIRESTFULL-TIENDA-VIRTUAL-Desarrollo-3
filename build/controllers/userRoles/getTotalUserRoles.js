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
exports.getTotalUserRoles = void 0;
const getTotalUserRolesServivce_1 = require("../../services/userRoles/getTotalUserRolesServivce");
const getTotalUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = ((_a = req.params) === null || _a === void 0 ? void 0 : _a.userId) ? Number(req.params.userId) : undefined;
        if (!userId) {
            return res.status(400).json({ error: 'El ID del usuario es requerido.' });
        }
        const userRoleService = new getTotalUserRolesServivce_1.GetUserRolesService();
        const totalRoles = yield userRoleService.getTotalUserRoles(userId);
        res.status(200).json({ userId, totalRoles });
    }
    catch (error) {
        console.error('Error al calcular el total de roles:', error);
        res.status(500).json({ error: error.message });
    }
});
exports.getTotalUserRoles = getTotalUserRoles;
//# sourceMappingURL=getTotalUserRoles.js.map
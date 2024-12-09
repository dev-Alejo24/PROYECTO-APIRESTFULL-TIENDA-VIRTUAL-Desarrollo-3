"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const getUserRole_1 = require("../controllers/userRoles/getUserRole");
const getTotalUserRoles_1 = require("../controllers/userRoles/getTotalUserRoles");
const deleteUserRole_1 = require("../controllers/userRoles/deleteUserRole");
const updateUserRole_1 = require("../controllers/userRoles/updateUserRole");
const createUserRoles_1 = require("../controllers/userRoles/createUserRoles");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/api/users/userRoles/:userId', [
    (0, express_validator_1.param)('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
], authMiddleware_1.default, getUserRole_1.getUserRoles);
router.get('/api/users/userRoles/lista/:userId', [
    (0, express_validator_1.param)('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
], authMiddleware_1.default, getUserRole_1.getUserRoles);
router.get('/api/users/userRoles/total/:userId', [
    (0, express_validator_1.param)('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
], authMiddleware_1.default, getTotalUserRoles_1.getTotalUserRoles);
router.post('/api/users/profile/userRoles', [
    (0, express_validator_1.body)('userId').isNumeric().withMessage('El ID del usuario es requerido y debe ser un número'),
    (0, express_validator_1.body)('roleId').isNumeric().withMessage('El ID del rol es requerido y debe ser un número'),
], authMiddleware_1.default, createUserRoles_1.createUserRole);
router.put('/api/users/profile/userRoles/:userId', [
    (0, express_validator_1.param)('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
    (0, express_validator_1.body)('roleIds').isArray().withMessage('Se requieren los IDs de los roles como un array'),
], authMiddleware_1.default, updateUserRole_1.updateUserRoles);
router.delete('/api/users/profile/delete/userRoles/:userId', [
    (0, express_validator_1.param)('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
], authMiddleware_1.default, deleteUserRole_1.deleteUserRole);
exports.default = router;
//# sourceMappingURL=userRolesRoutes.js.map
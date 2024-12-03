"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const createRoleController_1 = require("../controllers/roles/createRoleController");
const getRole_1 = require("../controllers/roles/getRole");
const updateRoleController_1 = require("../controllers/roles/updateRoleController");
const deleteRoleController_1 = require("../controllers/roles/deleteRoleController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/api/users/profile/roles/get:roleId', [
    (0, express_validator_1.param)('roleId').isNumeric().withMessage('El ID del rol debe ser un número'),
], authMiddleware_1.default, getRole_1.getRoles);
router.post('/api/users/profile/roles/create', [
    (0, express_validator_1.body)('name').notEmpty().withMessage('El nombre del rol es requerido'),
], authMiddleware_1.default, createRoleController_1.createRole);
router.put('/api/users/profile/roles/update:roleId', [
    (0, express_validator_1.param)('roleId').isNumeric().withMessage('El ID del rol debe ser un número'),
    (0, express_validator_1.body)('name').optional().notEmpty().withMessage('El nombre del rol es requerido'),
], authMiddleware_1.default, updateRoleController_1.updateRole);
router.delete('/api/users/profile/roles/delete/:roleId', [
    (0, express_validator_1.param)('roleId').isNumeric().withMessage('El ID del rol debe ser un número'),
], authMiddleware_1.default, deleteRoleController_1.deleteRole);
exports.default = router;
//# sourceMappingURL=rolesRoutes.js.map
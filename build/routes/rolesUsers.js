"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const createRoles_1 = require("../controllers/createRoles");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const roleController = new createRoles_1.RoleController();
router.post('/api/roles', [
    (0, express_validator_1.body)('name').notEmpty().withMessage('El nombre del rol es requerido'),
    (0, express_validator_1.body)('description').optional().isString().withMessage('La descripción debe ser un texto válido'),
], authMiddleware_1.default, roleController.createRole.bind(roleController));
exports.default = router;
//# sourceMappingURL=rolesUsers.js.map
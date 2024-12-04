"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const register_1 = require("../controllers/register");
const login_1 = require("../controllers/login");
const getProfile_1 = require("../controllers/getProfile");
const updateProfile_1 = require("../controllers/updateProfile");
const deleteProfile_1 = require("../controllers/deleteProfile");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/api/users/register', [
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('El primer nombre es requerido'),
    (0, express_validator_1.body)('middleName').notEmpty().withMessage('El segundo nombre es requerido'),
    (0, express_validator_1.body)('lastName').notEmpty().withMessage('El apellido es requerido'),
    (0, express_validator_1.body)('phone').notEmpty().trim().withMessage('El número de celular es requerido'),
    (0, express_validator_1.body)('email').isEmail().trim().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    (0, express_validator_1.body)('typeId').isInt().withMessage('El tipo de identificación es requerido y debe ser un número entero'),
    (0, express_validator_1.body)('identificationNumber').notEmpty().withMessage('El número de identificación es requerido'),
    (0, express_validator_1.body)('addressId').isInt().withMessage('La dirección es requerida y debe ser un número entero'),
], register_1.register);
router.post('/api/users/login', [
    (0, express_validator_1.body)('email').isEmail().trim().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('La contraseña es requerida'),
], login_1.login);
router.post('/api/users/login', [
    (0, express_validator_1.body)('email').isEmail().trim().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('La contraseña es requerida'),
], login_1.login);
router.get('/api/users/profile', authMiddleware_1.default, getProfile_1.getProfile);
router.put('/api/users/profile/:userId', authMiddleware_1.default, updateProfile_1.updateProfile);
router.delete('/api/users/profile/:userId', authMiddleware_1.default, deleteProfile_1.deleteProfile);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
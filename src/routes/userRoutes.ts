import { Router } from "express";
import { body } from "express-validator";
import { register } from '../controllers/register';
import { login } from '../controllers/login';
import { getProfile } from '../controllers/getProfile';
import { updateProfile } from '../controllers/updateProfile';
import { deleteProfile } from '../controllers/deleteProfile';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = Router();

// Rutas públicas
router.post('/api/users/register', [
  body('firstName').notEmpty().withMessage('El primer nombre es requerido'),
  body('middleName').notEmpty().withMessage('El segundo nombre es requerido'),
  body('lastName').notEmpty().withMessage('El apellido es requerido'),
  body('phone').notEmpty().trim().withMessage('El número de celular es requerido'),
  body('email').isEmail().trim().withMessage('Debe ser un email válido'),
  body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
  body('typeId').isInt().withMessage('El tipo de identificación es requerido y debe ser un número entero'),
  body('identificationNumber').notEmpty().withMessage('El número de identificación es requerido'),
  body('addressId').isInt().withMessage('La dirección es requerida y debe ser un número entero'),
], register);

router.post('/api/users/login', [
  body('email').isEmail().trim().withMessage('Debe ser un email válido'),
  body('password').notEmpty().withMessage('La contraseña es requerida'),
], login);
  
  router.post('/api/users/login', [
    body('email').isEmail().trim().withMessage('Debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
  ], login);
  
  // Rutas protegidas
  router.get('/api/users/profile', authMiddleware, getProfile);
  router.put('/api/users/profile/:userId', authMiddleware, updateProfile);
  router.delete('/api/users/profile/:userId', authMiddleware, deleteProfile);

  export default router;
  
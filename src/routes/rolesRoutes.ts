import { Router } from 'express';
import { body, param } from 'express-validator';
import { createRole } from '../controllers/roles/createRoleController';
import { searchRoleByName } from '../controllers/roles/searchRoleController'; // Importar el controlador
import { getRoles } from '../controllers/roles/getRole';
import { updateRole } from '../controllers/roles/updateRoleController';
import { deleteRole } from '../controllers/roles/deleteRoleController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = Router();


// Rutas privadas

// Obtener un rol por ID
router.get('/api/users/profile/roles/get:roleId', [
    param('roleId').isNumeric().withMessage('El ID del rol debe ser un número'), // Validación del parámetro
], authMiddleware, getRoles);

// Crear un nuevo rol
router.post('/api/users/profile/roles/create', [
    body('name').notEmpty().withMessage('El nombre del rol es requerido'), // Validación del cuerpo
    //body('description').optional().isString().withMessage('La descripción debe ser una cadena'),
], authMiddleware, createRole);

// Actualizar un rol por ID
router.put('/api/users/profile/roles/update:roleId', [
    param('roleId').isNumeric().withMessage('El ID del rol debe ser un número'),
    body('name').optional().notEmpty().withMessage('El nombre del rol es requerido'),
    // body('description').optional().isString().withMessage('La descripción debe ser una cadena'),
], authMiddleware, updateRole);

// Eliminar un rol por ID
router.delete('/api/users/profile/roles/delete/:roleId', [
    param('roleId').isNumeric().withMessage('El ID del rol debe ser un número'),
], authMiddleware, deleteRole);


import { countRoles } from '../controllers/roles/countRolesController'; // Importar el controlador para contar roles

// Contar la cantidad total de roles
router.get('/api/users/profile/roles/count', authMiddleware, countRoles);

// Buscar un rol por nombre
router.get('/api/users/profile/roles/search/:name', authMiddleware, searchRoleByName);

export default router;

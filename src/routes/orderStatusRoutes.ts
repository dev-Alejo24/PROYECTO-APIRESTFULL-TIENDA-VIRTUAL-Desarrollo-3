import { Router } from 'express';
import { getOrderStatuses, getOrderStatusById } from '../controllers/orderStatus/getOrderStatusController';
import { createOrderStatus } from '../controllers/orderStatus/createOrderStatusController';
import { updateOrderStatus } from '../controllers/orderStatus/updateOrderStatusController';
import { deleteOrderStatus } from '../controllers/orderStatus/deleteOrderStatusController';
import authMiddleware from '../middlewares/authMiddleware';
import { body, param } from 'express-validator';

const router = Router();

// Rutas protegidas
router.get('/api/users/orderStatus', getOrderStatuses); // Obtener todos los estados de orden
router.get('/api/users/orderStatus/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, getOrderStatusById); // Obtener estado de orden por ID

// Rutas protegidas
router.post('/api/users/orderStatus', [
  body('name').isString().withMessage('El nombre es requerido'),
], authMiddleware, createOrderStatus); // Crear un nuevo estado de orden

router.put('/api/users/orderStatus/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('name').isString().withMessage('El nombre es requerido'),
], authMiddleware, updateOrderStatus); // Actualizar estado de orden por ID

router.delete('/api/users/orderStatus/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, deleteOrderStatus); // Eliminar estado de orden por ID

export default router;

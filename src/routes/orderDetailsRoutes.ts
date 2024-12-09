import { Router } from 'express';
import { body, param } from 'express-validator';
import authMiddleware from '../middlewares/authMiddleware';
import { getAllOrderDetails, getOrderDetailById } from '../controllers/orderDetails/getOrderDetailsController';
import { createOrderDetail } from '../controllers/orderDetails/createOrderDetailsController';
import { updateOrderDetail } from '../controllers/orderDetails/updateOrderDetailsController';
import { deleteOrderDetail } from '../controllers/orderDetails/deleteOrderDetailsController';

const router = Router();

// Rutas protegidas
router.get('/api/users/orderDetails', getAllOrderDetails); // Obtener todos los detalles de órdenes
router.get('/api/users/orderDetails/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, getOrderDetailById); // Obtener detalle de orden por ID

// Rutas protegidas
router.post('/api/users/orderDetails', [
  body('idPurchaseOrder').isNumeric().withMessage('El ID de la orden de compra es requerido y debe ser un número'),
  body('idProduct').isNumeric().withMessage('El ID del producto es requerido y debe ser un número'),
  body('quantity').isNumeric().withMessage('La cantidad es requerida y debe ser un número'),
  body('price').isDecimal().withMessage('El precio es requerido y debe ser un valor decimal'),
], authMiddleware, createOrderDetail); // Crear un nuevo detalle de orden

router.put('/api/users/orderDetails/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('idPurchaseOrder').optional().isNumeric().withMessage('El ID de la orden de compra debe ser un número'),
  body('idProduct').optional().isNumeric().withMessage('El ID del producto debe ser un número'),
  body('quantity').optional().isNumeric().withMessage('La cantidad debe ser un número'),
  body('price').optional().isDecimal().withMessage('El precio debe ser un valor decimal'),
], authMiddleware, updateOrderDetail); // Actualizar detalle de orden por ID

router.delete('/api/users/orderDetails/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, deleteOrderDetail); // Eliminar detalle de orden por ID

export default router;
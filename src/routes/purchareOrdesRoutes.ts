import { Router } from 'express';
import { body, param } from 'express-validator';
import authMiddleware from '../middlewares/authMiddleware';
import { getAllPurchaseOrders, getPurchaseOrderById } from '../controllers/purcharseOrders/getPurchaerseOrdersController';
import { createPurchaseOrder } from '../controllers/purcharseOrders/createPurchaerseOrdersController';
import { updatePurchaseOrder } from '../controllers/purcharseOrders/updatePurchaerseOrdersController';
import { deletePurchaseOrder } from '../controllers/purcharseOrders/deletePurchaerseOrdersController';

const router = Router();

// Rutas protegidas
router.get('/api/users/purchaseOrders', getAllPurchaseOrders); // Obtener todas las órdenes de compra
router.get('/api/users/purchaseOrders/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, getPurchaseOrderById); // Obtener una orden de compra por ID

// Rutas protegidas
router.post('/api/users/purchaseOrders', [
  body('idSupplier').isNumeric().withMessage('El ID del proveedor es requerido y debe ser un número'),
  body('idStatus').isNumeric().withMessage('El ID del estado es requerido y debe ser un número'),
], authMiddleware, createPurchaseOrder); // Crear una nueva orden de compra

router.put('/api/users/purchaseOrders/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('idSupplier').optional().isNumeric().withMessage('El ID del proveedor debe ser un número'),
  body('idStatus').optional().isNumeric().withMessage('El ID del estado debe ser un número'),
], authMiddleware, updatePurchaseOrder); // Actualizar una orden de compra por ID

router.delete('/api/users/purchaseOrders/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, deletePurchaseOrder); // Eliminar una orden de compra por ID

export default router;

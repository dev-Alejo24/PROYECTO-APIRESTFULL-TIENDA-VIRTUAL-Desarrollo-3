import { Router } from 'express';
import { body, param } from 'express-validator';
import { getProducts, getProductById } from '../controllers/products/getProductController';
import { createProduct } from '../controllers/products/createProductController';
import { updateProduct } from '../controllers/products/updateProductController';
import { deleteProduct } from '../controllers/products/deleteProductController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Rutas públicas, al entrar a la tienda
router.get('/api/products', getProducts); // Obtener todos los productos
router.get('/api/products/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], getProductById); // Obtener producto por ID

// Rutas protegidas
router.post('/api/products', [
  body('name').isString().withMessage('El nombre del producto es requerido'),
  body('description').isString().optional(),
  body('price').isNumeric().withMessage('El precio es requerido y debe ser un número'),
  body('idCategory').isNumeric().withMessage('El ID de la categoría es requerido y debe ser un número'),
], authMiddleware, createProduct); // Crear un nuevo producto

router.put('/api/products/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('name').isString().withMessage('El nombre del producto es requerido'),
  body('description').isString().optional(),
  body('price').isNumeric().withMessage('El precio es requerido y debe ser un número'),
  body('idCategory').isNumeric().withMessage('El ID de la categoría es requerido y debe ser un número'),
], authMiddleware, updateProduct); // Actualizar producto por ID

router.delete('/api/products/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, deleteProduct); // Eliminar producto por ID

export default router;

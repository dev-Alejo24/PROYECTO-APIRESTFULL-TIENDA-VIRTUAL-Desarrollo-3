import { Router } from 'express';
import { getProductCategories, getProductCategoryById } from '../controllers/productCategories/getProductCategoryController';
import { createProductCategory } from '../controllers/productCategories/createProductCategoryController';
import { updateProductCategory } from '../controllers/productCategories/updateProductCategoryController';
import { deleteProductCategory } from '../controllers/productCategories/deleteProductCategoryController';
import authMiddleware from '../middlewares/authMiddleware';
import { body, param } from 'express-validator';

const router = Router();

// Rutas publica al entrar a la tienda
router.get('/api/productCategories', getProductCategories); // Obtener todas las categorías
router.get('/api/productCategories/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, getProductCategoryById); // Obtener categoría por ID

// Rutas protegidas
router.post('/api/users/productCategories', [
  body('categoryName').isString().withMessage('El nombre de la categoría es requerido'),
  body('description').isString().optional(),
], authMiddleware, createProductCategory); // Crear una nueva categoría

router.put('/api/users/productCategories/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
  body('categoryName').isString().withMessage('El nombre de la categoría es requerido'),
  body('description').isString().optional(),
], authMiddleware, updateProductCategory); // Actualizar categoría por ID

router.delete('/api/users/productCategories/:id', [
  param('id').isNumeric().withMessage('El ID debe ser un número'),
], authMiddleware, deleteProductCategory); // Eliminar categoría por ID

export default router;

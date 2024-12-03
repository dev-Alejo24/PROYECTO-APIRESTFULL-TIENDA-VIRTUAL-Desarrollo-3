import { Router } from 'express';
import { body, param } from 'express-validator';
import { GetAllIdentificationTypesController } from '../controllers/identificationType/getAllIdentificationTypesController';
import { GetIdentificationTypeByIdController } from '../controllers/identificationType/getIdentificationTypeByIdController';
import { CreateIdentificationTypeController } from '../controllers/identificationType/createIdentificationTypeController';
import { UpdateIdentificationTypeController } from '../controllers/identificationType/updateIdentificationTypeController';
import { DeleteIdentificationTypeController } from '../controllers/identificationType/deleteIdentificationTypeController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Controladores
const getAllIdentificationTypesController = new GetAllIdentificationTypesController();
const getIdentificationTypeByIdController = new GetIdentificationTypeByIdController();
const createIdentificationTypeController = new CreateIdentificationTypeController();
const updateIdentificationTypeController = new UpdateIdentificationTypeController();
const deleteIdentificationTypeController = new DeleteIdentificationTypeController();

// Rutas públicas
router.get('/api/identification-types', getAllIdentificationTypesController.handle);
router.get(
  '/api/identification-types/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  getIdentificationTypeByIdController.handle
);

// Rutas protegidas
router.post(
  '/api/identification-types',
  [
    body('type').notEmpty().withMessage('El tipo de identificación es obligatorio.'),
  ],
  authMiddleware,
  createIdentificationTypeController.handle
);

router.put(
  '/api/identification-types/:id',
  [
    param('id').isNumeric().withMessage('El ID debe ser un número.'),
    body('type').optional(),
  ],
  authMiddleware,
  updateIdentificationTypeController.handle
);

router.delete(
  '/api/identification-types/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  authMiddleware,
  deleteIdentificationTypeController.handle
);

export default router;

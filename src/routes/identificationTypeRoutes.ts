import { Router } from 'express';
import { body, param } from 'express-validator';
import { GetAllIdentificationTypesController } from '../controllers/identificationType/getAllIdentificationTypesController';
import { GetIdentificationTypeByIdController } from '../controllers/identificationType/getIdentificationTypeByIdController';
import { CreateIdentificationTypeController } from '../controllers/identificationType/createIdentificationTypeController';
import { UpdateIdentificationTypeController } from '../controllers/identificationType/updateIdentificationTypeController';
import { DeleteIdentificationTypeController } from '../controllers/identificationType/deleteIdentificationTypeController';

const router = Router();

// Controladores
const getAllIdentificationTypesController = new GetAllIdentificationTypesController();
const getIdentificationTypeByIdController = new GetIdentificationTypeByIdController();
const createIdentificationTypeController = new CreateIdentificationTypeController();
const updateIdentificationTypeController = new UpdateIdentificationTypeController();
const deleteIdentificationTypeController = new DeleteIdentificationTypeController();

// Rutas públicas
router.get('/api/identification-types', (req, res) => getAllIdentificationTypesController.handle(req, res));
router.get(
  '/api/identification-types/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  (req, res) => getIdentificationTypeByIdController.handle(req, res)
);

// Rutas públicas
router.post(
  '/api/identification-types',
  [
    body('type').notEmpty().withMessage('El tipo de identificación es obligatorio.'),
  ],
  (req, res) => createIdentificationTypeController.handle(req, res)
);

router.put(
  '/api/identification-types/:id',
  [
    param('id').isNumeric().withMessage('El ID debe ser un número.'),
    body('type').optional(),
  ],
  (req, res) => updateIdentificationTypeController.handle(req, res)
);

router.delete(
  '/api/identification-types/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  (req, res) => deleteIdentificationTypeController.handle(req, res)
);

export default router;

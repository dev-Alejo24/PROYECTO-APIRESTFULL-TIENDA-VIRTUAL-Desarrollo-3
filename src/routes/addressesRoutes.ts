import { Router } from 'express';
import { body, param } from 'express-validator';
import { GetAllAddressesController } from '../controllers/addresses/getAllAddressesController';
import { GetAddressByIdController } from '../controllers/addresses/getAddressByIdController';
import { CreateAddressController } from '../controllers/addresses/createAddressController';
import { UpdateAddressController } from '../controllers/addresses/updateAddressController';
import { DeleteAddressController } from '../controllers/addresses/deleteAddressController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Controladores
const getAllAddressesController = new GetAllAddressesController();
const getAddressByIdController = new GetAddressByIdController();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

// Rutas públicas
router.get('/api/addresses', getAllAddressesController.handle);
router.get(
  '/api/addresses/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  getAddressByIdController.handle
);

// Rutas protegidas
router.post(
  '/api/addresses',
  [
    body('street').notEmpty().withMessage('La calle es obligatoria.'),
    body('city').notEmpty().withMessage('La ciudad es obligatoria.'),
    body('state').optional(),
    body('zipCode').optional().isLength({ max: 10 }).withMessage('El código postal debe tener como máximo 10 caracteres.'),
  ],
  authMiddleware,
  createAddressController.handle
);

router.put(
  '/api/addresses/:id',
  [
    param('id').isNumeric().withMessage('El ID debe ser un número.'),
    body('street').optional(),
    body('city').optional(),
    body('state').optional(),
    body('zipCode').optional().isLength({ max: 10 }).withMessage('El código postal debe tener como máximo 10 caracteres.'),
  ],
  authMiddleware,
  updateAddressController.handle
);

router.delete(
  '/api/addresses/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  authMiddleware,
  deleteAddressController.handle
);

export default router;

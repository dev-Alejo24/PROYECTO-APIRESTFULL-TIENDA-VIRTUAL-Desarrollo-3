import { Router } from 'express';
import { body, param } from 'express-validator';
import { GetAllAddressesController } from '../controllers/addresses/getAllAddressesController';
import { GetAddressByIdController } from '../controllers/addresses/getAddressByIdController';
import { CreateAddressController } from '../controllers/addresses/createAddressController';
import { UpdateAddressController } from '../controllers/addresses/updateAddressController';
import { DeleteAddressController } from '../controllers/addresses/deleteAddressController';

const router = Router();

// Controladores
const getAllAddressesController = new GetAllAddressesController();
const getAddressByIdController = new GetAddressByIdController();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();

// Rutas públicas
router.get('/api/addresses', getAllAddressesController.handle.bind(getAllAddressesController));
router.get(
  '/api/addresses/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  getAddressByIdController.handle.bind(getAddressByIdController),
);

// Rutas públicas
router.post(
  '/api/addresses',
  [
    body('street').notEmpty().withMessage('La calle es obligatoria.'),
    body('city').notEmpty().withMessage('La ciudad es obligatoria.'),
    body('state').optional(),
    body('zipCode').optional().isLength({ max: 10 }).withMessage('El código postal debe tener como máximo 10 caracteres.'),
  ],
  createAddressController.handle.bind(createAddressController),
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
  updateAddressController.handle.bind(updateAddressController),
);

router.delete(
  '/api/addresses/:id',
  [param('id').isNumeric().withMessage('El ID debe ser un número.')],
  deleteAddressController.handle.bind(deleteAddressController),
);

export default router;

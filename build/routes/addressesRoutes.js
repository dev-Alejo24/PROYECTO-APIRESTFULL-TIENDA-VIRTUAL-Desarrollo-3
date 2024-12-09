"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const getAllAddressesController_1 = require("../controllers/addresses/getAllAddressesController");
const getAddressByIdController_1 = require("../controllers/addresses/getAddressByIdController");
const createAddressController_1 = require("../controllers/addresses/createAddressController");
const updateAddressController_1 = require("../controllers/addresses/updateAddressController");
const deleteAddressController_1 = require("../controllers/addresses/deleteAddressController");
const router = (0, express_1.Router)();
const getAllAddressesController = new getAllAddressesController_1.GetAllAddressesController();
const getAddressByIdController = new getAddressByIdController_1.GetAddressByIdController();
const createAddressController = new createAddressController_1.CreateAddressController();
const updateAddressController = new updateAddressController_1.UpdateAddressController();
const deleteAddressController = new deleteAddressController_1.DeleteAddressController();
router.get('/api/addresses', getAllAddressesController.handle.bind(getAllAddressesController));
router.get('/api/addresses/:id', [(0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.')], getAddressByIdController.handle.bind(getAddressByIdController));
router.post('/api/addresses', [
    (0, express_validator_1.body)('street').notEmpty().withMessage('La calle es obligatoria.'),
    (0, express_validator_1.body)('city').notEmpty().withMessage('La ciudad es obligatoria.'),
    (0, express_validator_1.body)('state').optional(),
    (0, express_validator_1.body)('zipCode').optional().isLength({ max: 10 }).withMessage('El código postal debe tener como máximo 10 caracteres.'),
], createAddressController.handle.bind(createAddressController));
router.put('/api/addresses/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.'),
    (0, express_validator_1.body)('street').optional(),
    (0, express_validator_1.body)('city').optional(),
    (0, express_validator_1.body)('state').optional(),
    (0, express_validator_1.body)('zipCode').optional().isLength({ max: 10 }).withMessage('El código postal debe tener como máximo 10 caracteres.'),
], updateAddressController.handle.bind(updateAddressController));
router.delete('/api/addresses/:id', [(0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.')], deleteAddressController.handle.bind(deleteAddressController));
exports.default = router;
//# sourceMappingURL=addressesRoutes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const getAllIdentificationTypesController_1 = require("../controllers/identificationType/getAllIdentificationTypesController");
const getIdentificationTypeByIdController_1 = require("../controllers/identificationType/getIdentificationTypeByIdController");
const createIdentificationTypeController_1 = require("../controllers/identificationType/createIdentificationTypeController");
const updateIdentificationTypeController_1 = require("../controllers/identificationType/updateIdentificationTypeController");
const deleteIdentificationTypeController_1 = require("../controllers/identificationType/deleteIdentificationTypeController");
const router = (0, express_1.Router)();
const getAllIdentificationTypesController = new getAllIdentificationTypesController_1.GetAllIdentificationTypesController();
const getIdentificationTypeByIdController = new getIdentificationTypeByIdController_1.GetIdentificationTypeByIdController();
const createIdentificationTypeController = new createIdentificationTypeController_1.CreateIdentificationTypeController();
const updateIdentificationTypeController = new updateIdentificationTypeController_1.UpdateIdentificationTypeController();
const deleteIdentificationTypeController = new deleteIdentificationTypeController_1.DeleteIdentificationTypeController();
router.get('/api/identification-types', (req, res) => getAllIdentificationTypesController.handle(req, res));
router.get('/api/identification-types/:id', [(0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.')], (req, res) => getIdentificationTypeByIdController.handle(req, res));
router.post('/api/identification-types', [
    (0, express_validator_1.body)('type').notEmpty().withMessage('El tipo de identificación es obligatorio.'),
], (req, res) => createIdentificationTypeController.handle(req, res));
router.put('/api/identification-types/:id', [
    (0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.'),
    (0, express_validator_1.body)('type').optional(),
], (req, res) => updateIdentificationTypeController.handle(req, res));
router.delete('/api/identification-types/:id', [(0, express_validator_1.param)('id').isNumeric().withMessage('El ID debe ser un número.')], (req, res) => deleteIdentificationTypeController.handle(req, res));
exports.default = router;
//# sourceMappingURL=identificationTypeRoutes.js.map
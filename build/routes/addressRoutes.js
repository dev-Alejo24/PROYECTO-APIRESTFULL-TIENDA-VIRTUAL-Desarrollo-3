"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_1 = require("../controllers/address/");
const router = (0, express_1.Router)();
const addressController = new address_1.AddressController();
router.post('/addresses', addressController.createAddress);
router.get('/addresses', addressController.getAllAddresses);
router.get('/addresses/:id', addressController.getAddressById);
router.put('/addresses/:id', addressController.updateAddress);
router.delete('/addresses/:id', addressController.deleteAddress);
exports.default = router;
//# sourceMappingURL=addressRoutes.js.map
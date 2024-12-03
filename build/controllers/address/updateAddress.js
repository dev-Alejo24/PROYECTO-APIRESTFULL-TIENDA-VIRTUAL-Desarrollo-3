"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddress = void 0;
const adressModel_1 = require("../../models/adressModel");
const updateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { street, city, state, zipCode } = req.body;
        const address = yield adressModel_1.default.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: `Address with ID ${id} not found` });
        }
        yield address.update({ street, city, state, zipCode });
        return res.status(200).json({ message: 'Address updated successfully', data: address });
    }
    catch (error) {
        console.error('Error updating address:', error);
        return res.status(500).json({ message: 'Error updating address', error: error.message });
    }
});
exports.updateAddress = updateAddress;
//# sourceMappingURL=updateAddress.js.map
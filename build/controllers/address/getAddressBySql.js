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
exports.getAddressById = void 0;
const adressModel_1 = require("../../models/adressModel");
const getAddressById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const address = yield adressModel_1.default.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: `Address with ID ${id} not found` });
        }
        return res.status(200).json({ data: address });
    }
    catch (error) {
        console.error('Error fetching address by ID:', error);
        return res.status(500).json({ message: 'Error fetching address', error: error.message });
    }
});
exports.getAddressById = getAddressById;
//# sourceMappingURL=getAddressBySql.js.map
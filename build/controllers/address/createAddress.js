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
exports.createAddress = void 0;
const adressModel_1 = require("../../models/adressModel");
const createAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { street, city, state, zipCode } = req.body;
        const newAddress = yield adressModel_1.default.create({ street, city, state, zipCode });
        return res.status(201).json({ message: 'Address created successfully', data: newAddress });
    }
    catch (error) {
        console.error('Error creating address:', error);
        return res.status(500).json({ message: 'Error creating address', error: error.message });
    }
});
exports.createAddress = createAddress;
//# sourceMappingURL=createAddress.js.map
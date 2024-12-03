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
exports.CreateAddressController = void 0;
const createAddressService_1 = require("../../services/addresses/createAddressService");
class CreateAddressController {
    constructor() {
        this.createAddressService = new createAddressService_1.CreateAddressService();
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const newAddress = yield this.createAddressService.execute(data);
                res.status(201).json(newAddress);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.CreateAddressController = CreateAddressController;
//# sourceMappingURL=createAddressController.js.map
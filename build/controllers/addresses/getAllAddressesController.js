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
exports.GetAllAddressesController = void 0;
const getAllAddressesService_1 = require("../../services/addresses/getAllAddressesService");
class GetAllAddressesController {
    constructor() {
        this.getAllAddressesService = new getAllAddressesService_1.GetAllAddressesService();
    }
    handle(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addresses = yield this.getAllAddressesService.execute();
                res.status(200).json(addresses);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.GetAllAddressesController = GetAllAddressesController;
//# sourceMappingURL=getAllAddressesController.js.map
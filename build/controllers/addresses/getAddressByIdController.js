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
exports.GetAddressByIdController = void 0;
const gerAddressById_1 = require("../../services/addresses/gerAddressById");
class GetAddressByIdController {
    constructor() {
        this.getAddressByIdService = new gerAddressById_1.GetAddressByIdService();
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const address = yield this.getAddressByIdService.execute(id);
                res.status(200).json(address);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.GetAddressByIdController = GetAddressByIdController;
//# sourceMappingURL=getAddressByIdController.js.map
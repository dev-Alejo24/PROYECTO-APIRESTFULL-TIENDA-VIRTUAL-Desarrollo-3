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
exports.GetIdentificationTypeByIdController = void 0;
const getIdentificationTypeByIdService_1 = require("../../services/identificationType/getIdentificationTypeByIdService");
class GetIdentificationTypeByIdController {
    constructor() {
        this.getIdentificationTypeByIdService = new getIdentificationTypeByIdService_1.GetIdentificationTypeByIdService();
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const type = yield this.getIdentificationTypeByIdService.execute(id);
                res.status(200).json(type);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.GetIdentificationTypeByIdController = GetIdentificationTypeByIdController;
//# sourceMappingURL=getIdentificationTypeByIdController.js.map
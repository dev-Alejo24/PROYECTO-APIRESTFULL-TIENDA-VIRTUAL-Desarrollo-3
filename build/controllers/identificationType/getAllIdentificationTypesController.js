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
exports.GetAllIdentificationTypesController = void 0;
const getAllIdentificationnTypesService_1 = require("../../services/identificationType/getAllIdentificationnTypesService");
class GetAllIdentificationTypesController {
    constructor() {
        this.getAllIdentificationTypesService = new getAllIdentificationnTypesService_1.GetAllIdentificationTypesService();
    }
    handle(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const types = yield this.getAllIdentificationTypesService.execute();
                res.status(200).json(types);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.GetAllIdentificationTypesController = GetAllIdentificationTypesController;
//# sourceMappingURL=getAllIdentificationTypesController.js.map
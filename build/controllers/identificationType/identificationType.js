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
const IdentificationTypeService_1 = require("../services/IdentificationTypeService");
class IdentificationTypeController {
    constructor() {
        this.identificationTypeService = new IdentificationTypeService_1.default();
    }
    getIdentificationTypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const typeId = Number(req.params.id);
                const identificationType = yield this.identificationTypeService.findById(typeId);
                res.json(identificationType);
            }
            catch (error) {
                res.status(500).json({ error: 'Ocurrió un error al obtener el tipo de identificación.' });
            }
        });
    }
    createIdentificationType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newType = yield this.identificationTypeService.create(req.body);
                res.status(201).json(newType);
            }
            catch (error) {
                res.status(500).json({ error: 'Ocurrió un error al crear el tipo de identificación.' });
            }
        });
    }
}
exports.default = IdentificationTypeController;
//# sourceMappingURL=identificationType.js.map
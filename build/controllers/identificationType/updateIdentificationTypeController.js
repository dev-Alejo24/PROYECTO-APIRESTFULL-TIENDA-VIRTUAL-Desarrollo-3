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
exports.UpdateIdentificationTypeController = void 0;
const updateIdentificationTypeService_1 = require("../../services/identificationType/updateIdentificationTypeService");
class UpdateIdentificationTypeController {
    constructor() {
        this.updateIdentificationTypeService = new updateIdentificationTypeService_1.UpdateIdentificationTypeService();
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const data = req.body;
                const updatedType = yield this.updateIdentificationTypeService.execute(id, data);
                res.status(200).json(updatedType);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.UpdateIdentificationTypeController = UpdateIdentificationTypeController;
//# sourceMappingURL=updateIdentificationTypeController.js.map
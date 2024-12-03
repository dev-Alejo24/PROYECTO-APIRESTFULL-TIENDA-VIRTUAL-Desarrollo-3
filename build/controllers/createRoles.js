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
exports.RoleController = void 0;
const createRolesService_1 = require("../services/createRolesService");
class RoleController {
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleData = req.body;
                const response = yield (0, createRolesService_1.createRole)(roleData);
                res.status(201).json(response);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.RoleController = RoleController;
//# sourceMappingURL=createRoles.js.map
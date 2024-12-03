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
exports.createRole = void 0;
const createRoleService_1 = require("../../services/roles/createRoleService");
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const roleService = new createRoleService_1.CreateRoleService();
        const newRole = yield roleService.createRole({ name });
        res.status(201).json({ message: 'Rol creado', role: newRole });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createRole = createRole;
//# sourceMappingURL=createRoleController.js.map
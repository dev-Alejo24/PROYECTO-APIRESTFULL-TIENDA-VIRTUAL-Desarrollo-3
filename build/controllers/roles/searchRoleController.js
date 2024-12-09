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
exports.searchRoleByName = void 0;
const getRole_1 = require("../../infra/roles/getRole");
const searchRoleByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const getRoleSql = new getRole_1.GetRoleSql();
        const roles = yield getRoleSql.getRolesByName(name);
        res.status(200).json({ roles });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.searchRoleByName = searchRoleByName;
//# sourceMappingURL=searchRoleController.js.map
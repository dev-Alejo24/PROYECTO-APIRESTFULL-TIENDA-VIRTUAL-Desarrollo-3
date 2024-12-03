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
exports.AddressSql = void 0;
const adressModel_1 = require("../../models/adressModel");
class AddressSql {
    getAddress(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`Fetching address with id: ${id}`);
                const address = yield adressModel_1.default.findByPk(id);
                return address;
            }
            catch (error) {
                console.error("Error fetching address:", error);
                throw error;
            }
        });
    }
    getAddressByCriteria(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Fetching addresses with criteria:", criteria);
                const addresses = yield adressModel_1.default.findAll({ where: criteria });
                return addresses;
            }
            catch (error) {
                console.error("Error fetching addresses:", error);
                throw error;
            }
        });
    }
}
exports.AddressSql = AddressSql;
//# sourceMappingURL=getAddressBySql.js.map
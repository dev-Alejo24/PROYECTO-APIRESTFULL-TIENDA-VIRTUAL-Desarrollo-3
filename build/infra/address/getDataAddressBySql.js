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
exports.AddressBySql = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../config/database");
class AddressBySql {
    getDataAddressBySql(addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      SELECT 
        addresses.id,
        addresses.street,
        addresses.city,
        addresses.state,
        addresses.postalCode,
        CONCAT_WS(' ', people.firstName, people.lastName) as fullName
      FROM addresses
      INNER JOIN people ON addresses.id = people.addressId
      INNER JOIN people ON people.userId = users.id
      WHERE addresses.id = :addressId
    `;
            try {
                const results = yield database_1.default.query(query, {
                    replacements: { addressId },
                    type: sequelize_1.QueryTypes.SELECT,
                });
                return results;
            }
            catch (error) {
                console.error('Error ejecutando la consulta:', error);
                throw new Error('No se pudo obtener los detalles de la dirección.');
            }
        });
    }
}
exports.AddressBySql = AddressBySql;
//# sourceMappingURL=getDataAddressBySql.js.map
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
exports.createAddress = void 0;
const createAddressSql_1 = require("../../infra/address/createAddressSql");
const createAddress = (addressData) => __awaiter(void 0, void 0, void 0, function* () {
    const { street, city, state, zipCode } = addressData;
    const addressQuery = new createAddressSql_1.CreateAddressSql();
    const existingAddress = yield addressQuery.findAddressByData({ street, city, state, zipCode });
    if (existingAddress) {
        throw new Error('La dirección ya existe.');
    }
    const address = yield addressQuery.createAddress({ street, city, state, zipCode });
    return address;
});
exports.createAddress = createAddress;
//# sourceMappingURL=addressCreateService.js.map
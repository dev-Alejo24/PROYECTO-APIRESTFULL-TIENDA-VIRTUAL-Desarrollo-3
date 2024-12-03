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
exports.CreateAddressSql = void 0;
const adressModel_1 = require("../../models/adressModel");
class CreateAddressSql {
    findAddressByData(arg0) {
        throw new Error('Method not implemented.');
    }
    createAddress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data, 'dataCreateAddresSql');
            const address = yield adressModel_1.default.create(data);
            return address;
        });
    }
}
exports.CreateAddressSql = CreateAddressSql;
//# sourceMappingURL=createAddressSql.js.map
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
exports.CreateAddressService = void 0;
const createAddress_1 = require("../../infra/addresses/createAddress");
class CreateAddressService {
    constructor() {
        this.createAddressInfra = new createAddress_1.CreateAddressInfra();
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createAddressInfra.execute(data);
        });
    }
}
exports.CreateAddressService = CreateAddressService;
//# sourceMappingURL=createAddressService.js.map
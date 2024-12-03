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
exports.GetUserProfile = void 0;
const getDataByQuerySelect_1 = require("../infra/getDataByQuerySelect");
class GetUserProfile {
    getUserProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId, 'userId');
            const user = new getDataByQuerySelect_1.UserByIdSql();
            const responseUser = yield user.UserByIdSql(userId);
            if (!responseUser) {
                throw new Error('Usuario no encontrado');
            }
            return responseUser;
        });
    }
}
exports.GetUserProfile = GetUserProfile;
//# sourceMappingURL=getUserProfileService.js.map
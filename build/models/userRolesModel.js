"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const userModel_1 = __importDefault(require("./userModel"));
const rolesModel_1 = __importDefault(require("./rolesModel"));
class UserRoles extends sequelize_1.Model {
}
UserRoles.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: userModel_1.default,
            key: "id",
        },
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: rolesModel_1.default,
            key: "id",
        },
    },
}, {
    tableName: 'userRoles',
    sequelize: database_1.default,
    timestamps: true,
});
exports.default = UserRoles;
//# sourceMappingURL=userRolesModel.js.map
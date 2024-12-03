"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class IdentificationType extends sequelize_1.Model {
}
IdentificationType.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    tableName: 'identificationType',
    sequelize: database_1.default,
    timestamps: true,
});
exports.default = IdentificationType;
//# sourceMappingURL=identificationTypeModel.js.map
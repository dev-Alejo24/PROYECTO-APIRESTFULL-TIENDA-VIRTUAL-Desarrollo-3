"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const userModel_1 = __importDefault(require("./userModel"));
const orderStatusModel_1 = __importDefault(require("./orderStatusModel"));
class PurcharseOrders extends sequelize_1.Model {
}
PurcharseOrders.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    supplierId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: userModel_1.default,
            key: 'id',
        },
    },
    statusId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: orderStatusModel_1.default,
            key: 'id',
        },
    },
}, {
    tableName: 'purcharseOrders',
    sequelize: database_1.default,
    timestamps: true,
});
exports.default = PurcharseOrders;
//# sourceMappingURL=purcharseOrdersModel.js.map
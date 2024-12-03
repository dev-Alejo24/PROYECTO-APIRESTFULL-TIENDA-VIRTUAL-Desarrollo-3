"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const purcharseOrdersModel_1 = __importDefault(require("./purcharseOrdersModel"));
const productsModel_1 = __importDefault(require("./productsModel"));
class OrderDetails extends sequelize_1.Model {
}
OrderDetails.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    purcharseOrderId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: purcharseOrdersModel_1.default,
            key: "id",
        },
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: productsModel_1.default,
            key: "id",
        },
    },
    quanty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: "orderDetails",
    timestamps: true,
    sequelize: database_1.default,
});
exports.default = OrderDetails;
//# sourceMappingURL=orderDetailsModel.js.map
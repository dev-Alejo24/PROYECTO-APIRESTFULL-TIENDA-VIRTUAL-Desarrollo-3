"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const productCategoriesModel_1 = __importDefault(require("./productCategoriesModel"));
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            model: productCategoriesModel_1.default,
            key: "id"
        },
    },
}, {
    tableName: 'products',
    sequelize: database_1.default,
    timestamps: true,
});
exports.default = Products;
//# sourceMappingURL=productsModel.js.map
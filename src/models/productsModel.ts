import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import ProductCategoires from './productCategoriesModel'; // modelo

class Products extends Model {
    public id!: number;

    public name!: string;

    public description!: string;

    public price!: number;

    public categoryId!: number;

    public readonly craetedAt!: Date;

    public readonly updatedAt!: Date;
}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: ProductCategoires,
                key: 'id',
            },
        },
    },
    {
        tableName: 'products',
        sequelize,
        timestamps: true,
    },
);

export default Products;

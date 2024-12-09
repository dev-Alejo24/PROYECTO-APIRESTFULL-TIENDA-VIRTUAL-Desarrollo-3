import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class ProductCategoires extends Model {
    public id!: number;

    public categoryName!: string;

    public description!: string;

    public readonly cratedAt!: Date;

    public readonly updatedAt!: Date;
}

ProductCategoires.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryName: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'productCategories',
        sequelize,
        timestamps: true,
    },
);

export default ProductCategoires;

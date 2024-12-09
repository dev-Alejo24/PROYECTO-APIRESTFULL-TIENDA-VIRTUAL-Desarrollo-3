import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import PurcharseOrders from './purcharseOrdersModel'; // modelo
import Products from './productsModel'; // modelo

class OrderDetails extends Model {
    public id!: number;

    public purcharseOrderId!: number;

    public productId!: number;

    public quanty!: number;

    public price!: number;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

OrderDetails.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        purcharseOrderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: PurcharseOrders,
                key: 'id',
            },
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: Products,
                key: 'id',
            },
        },
        quanty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: 'orderDetails',
        timestamps: true,
        sequelize,
    },
);

export default OrderDetails;

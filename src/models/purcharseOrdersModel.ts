import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './userModel';
import OrderStatus from './orderStatusModel'; // model OrderStatus

class PurcharseOrders extends Model {
    public id!: number;

    public supplierId!: number;

    public statusId!: number;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

PurcharseOrders.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        supplierId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User, // busca al user
                key: 'id',
            },
        },
        statusId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: OrderStatus,
                key: 'id',
            },
        },
    },
    {
        tableName: 'purcharseOrders',
        sequelize,
        timestamps: true,
    },
);

export default PurcharseOrders;

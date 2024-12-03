import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // importacion correcta

class OrderStatus extends Model {
    public id!: number;

    public name!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

OrderStatus.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
       tableName: 'OrderStatus',
       sequelize,
       timestamps: true
    }
);

export default OrderStatus;
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Address extends Model{
    public id!: number;

    public street!: string;

    public city!: string;

    public state!: string;

    public zipCode!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'addresses',
        sequelize,
        timestamps: true,
    },
);

export default Address;

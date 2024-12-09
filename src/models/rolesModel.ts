import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Roles extends Model {
    public id!: number;

    public name!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

Roles.init(
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
        tableName: 'roles',
        sequelize,
        timestamps: true,
    },
);

export default Roles;

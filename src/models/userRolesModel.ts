import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import User from "./userModel";
import Roles from "./rolesModel";

class UserRoles extends Model{
    public id!: number;

    public userId: number;

    public roleId: number;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

UserRoles.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: User,
                key: "id",
            },
        },
        roleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                model: Roles,
                key: "id",
            },
        },
    },
    {
        tableName: 'userRoles',
        sequelize,
        timestamps: true,
    }
);

export default UserRoles;
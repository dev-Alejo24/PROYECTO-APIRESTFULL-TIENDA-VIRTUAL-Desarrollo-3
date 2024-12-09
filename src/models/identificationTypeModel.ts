import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // ruta de importacion correcta

class IdentificationType extends Model {
    public id!: number;

    public type!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

IdentificationType.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: 'identificationType',
      sequelize, // passing the `sequelize` instance is required,
      timestamps: true, // Habilitar timestamps automáticos
    },
  );

export default IdentificationType;

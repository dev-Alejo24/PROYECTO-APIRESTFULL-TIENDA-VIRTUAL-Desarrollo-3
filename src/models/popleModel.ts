// src/models/userModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './userModel';
import IdentificationType from './identificationTypeModel';
import Address from './adressModel';

class People extends Model {
  public id!: number;

  public userId: number;

  public typeId: number;

 public identificationNumber!: string;

  public firstName!: string;
  
  public middleName!: string;

  public lastNames!: string;

  public phone!: string;

  public addressId: string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

People.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User, // Hace referencia al modelo `User`
        key: 'id', // La columna `id` de `User`
      },
    },
    typeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: IdentificationType, // Hace referencia al modelo `IdentificationType`
        key: 'id', // La columna `id` de `IdentificationType`
      },
    },
    identificationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER.UNSIGNED, // Cambiado a INTEGER.UNSIGNED
      allowNull: true,
      references: {
        model: Address, // Hace referencia al modelo `Address`
        key: 'id', // La columna `id` de `Address`
      },
    },
  },
  {
    tableName: 'people',
    sequelize, // passing the `sequelize` instance is required
    timestamps: true, // Habilitar timestamps automáticos
  },
);


export default People;

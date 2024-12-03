import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetAllIdentificationTypesInfra {
  async execute() {
    const query = `SELECT * FROM identificationType`;
    return await sequelize.query(query, { type: QueryTypes.SELECT });
  }
}
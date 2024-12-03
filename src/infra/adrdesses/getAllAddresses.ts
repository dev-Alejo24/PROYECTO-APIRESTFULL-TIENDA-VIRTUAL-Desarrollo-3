import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetAllAddressesInfra {
  async execute() {
    const query = `SELECT * FROM addresses`;
    return await sequelize.query(query, { type: QueryTypes.SELECT });
  }
}

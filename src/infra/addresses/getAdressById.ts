import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetAddressByIdInfra {
  async execute(id: number) {
    const query = 'SELECT * FROM addresses WHERE id = :id';
    const result = await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.SELECT,
    });
    return result.length ? result[0] : null;
  }
}

import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetOrderStatusSql {
  async getOrderStatusesSql(): Promise<any> {
    const query = 'SELECT * FROM orderStatus';
    return sequelize.query(query, { type: QueryTypes.SELECT });
  }

  async getOrderStatusByIdSql(id: number): Promise<any> {
    const query = 'SELECT * FROM orderStatus WHERE id = :id';
    const [result] = await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.SELECT,
    });
    return result || null;
  }
}

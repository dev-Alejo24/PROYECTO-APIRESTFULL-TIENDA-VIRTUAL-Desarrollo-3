import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class UpdateOrderStatusSql {
  async updateOrderStatusSql(id: number, data: { name: string }): Promise<any> {
    const query = 'UPDATE orderStatus SET name = :name, updatedAt = NOW() WHERE id = :id';
    return sequelize.query(query, {
      replacements: { ...data, id },
      type: QueryTypes.UPDATE,
    });
  }
}

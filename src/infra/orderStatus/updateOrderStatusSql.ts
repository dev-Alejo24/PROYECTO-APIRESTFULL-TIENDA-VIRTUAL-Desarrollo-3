import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class UpdateOrderStatusSql {
  async updateOrderStatusSql(id: number, data: { name: string }): Promise<any> {
    const query = "UPDATE orderStatus SET name = :name, updatedAt = NOW() WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { ...data, id },
      type: QueryTypes.UPDATE,
    });
  }
}

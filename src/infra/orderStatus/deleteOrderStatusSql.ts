import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class DeleteOrderStatusSql {
  async deleteOrderStatusSql(id: number): Promise<any> {
    const query = "DELETE FROM orderStatus WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.DELETE,
    });
  }
}

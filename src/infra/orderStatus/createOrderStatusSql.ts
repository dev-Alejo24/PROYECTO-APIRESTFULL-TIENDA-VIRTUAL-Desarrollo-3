import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class CreateOrderStatusSql {
  async createOrderStatusSql(data: { name: string }): Promise<any> {
    const query = "INSERT INTO orderStatus (name, createdAt, updatedAt) VALUES (:name, NOW(), NOW())";
    return await sequelize.query(query, {
      replacements: data,
      type: QueryTypes.INSERT,
    });
  }
}

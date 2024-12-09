import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class CreateOrderStatusSql {
  async createOrderStatusSql(data: { name: string }): Promise<any> {
    const query = 'INSERT INTO orderStatus (name, createdAt, updatedAt) VALUES (:name, NOW(), NOW())';
    return sequelize.query(query, {
      replacements: data,
      type: QueryTypes.INSERT,
    });
  }
}

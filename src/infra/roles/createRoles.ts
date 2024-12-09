import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class CreateRoleSql {
  async createRoleSql(roleData: { name: string }): Promise<any> {
    const query = 'INSERT INTO roles (name, createdAt, updatedAt) VALUES (:name, NOW(), NOW())';
    const [result] = await sequelize.query(query, {
      replacements: { ...roleData },
      type: QueryTypes.INSERT,
    });
    return result;
  }
}

import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class CreateRoleSql {
  async createRoleSql(roleData: { name: string}): Promise<any> {
    const query = "INSERT INTO roles (name) VALUES (:name)";
    const [result] = await sequelize.query(query, {
      replacements: { ...roleData },
      type: QueryTypes.INSERT,
    });
    return result;
  }
}
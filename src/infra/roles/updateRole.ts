// infra/updateRoleSql.ts
import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class UpdateRoleSql {
  async updateRoleSql(roleId: number, roleData: { name: string }): Promise<any> {
    const query = 'UPDATE roles SET name = :name WHERE id = :roleId';
    const [result] = await sequelize.query(query, {
      replacements: { ...roleData, roleId },
      type: QueryTypes.UPDATE,
    });
    return result;
  }
}

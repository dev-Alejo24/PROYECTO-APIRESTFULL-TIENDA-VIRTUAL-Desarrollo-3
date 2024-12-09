// infra/deleteRole.ts
import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class DeleteRoleSql {
  async deleteRoleSql(roleId: number): Promise<number> {
    const query = "DELETE FROM roles WHERE id = :roleId";
    const result = await sequelize.query(query, {
      replacements: { roleId },
      type: QueryTypes.DELETE,
    });
    return result[1];
  }
}
// infra/deleteRole.ts
import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class DeleteRoleSql {
  async deleteRoleSql(roleId: number): Promise<number> {
    const query = 'DELETE FROM roles WHERE id = :roleId';
    const result = await sequelize.query(query, {
      replacements: { roleId },
      type: QueryTypes.DELETE,
    });
    return result[1];
  }
}

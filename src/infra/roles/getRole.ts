// infra/getRoleSql.ts
import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetRoleSql {
  async getRolesSql(): Promise<any> {
    const query = "SELECT * FROM roles";
    const roles = await sequelize.query(query, { type: QueryTypes.SELECT });
    return roles;
  }

  async getRoleByIdSql(roleId: number): Promise<any> {
    const query = "SELECT * FROM roles WHERE id = :roleId";
    const role = await sequelize.query(query, {
      replacements: { roleId },
      type: QueryTypes.SELECT,
    });
    return role.length > 0 ? role[0] : null;
  }
}

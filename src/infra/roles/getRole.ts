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

  async countRoles(): Promise<number> {
    const query = "SELECT COUNT(*) as total FROM roles";
    const result = await sequelize.query(query, { type: QueryTypes.SELECT });
    return (result[0] as { total: number }).total; // Asegurarse de que el tipo sea correcto
  }

  async getRolesByName(name: string): Promise<any[]> {
    const query = "SELECT * FROM roles WHERE LOWER(name) LIKE LOWER(:name)";
    const roles = await sequelize.query(query, {
      replacements: { name: `%${name}%` },
      type: QueryTypes.SELECT,
    });
    return roles;
  }
}

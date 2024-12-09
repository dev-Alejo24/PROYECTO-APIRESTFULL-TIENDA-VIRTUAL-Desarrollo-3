import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';
// import UserRole from '../../models/userRolesModel';
// import Role from '../../models/rolesModel';

interface RoleQueryResult {
  id: number;
  name: string;
}

export class GetUserRolesSql {
  async getUserRolesSql(userId: number): Promise<RoleQueryResult[]> {
    const query = `
      SELECT roles.id, roles.name 
      FROM roles 
      INNER JOIN userRoles 
      ON roles.id = userRoles.roleId 
      WHERE userRoles.userId = :userId
    `;

    try {
      const results: RoleQueryResult[] = await sequelize.query(query, {
        replacements: { userId },
        type: QueryTypes.SELECT,
      });

      return results;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener los roles de usuario.');
    }
  }
}

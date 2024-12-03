import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';
// import UserRole from '../../models/userRolesModel';
// import Role from '../../models/rolesModel';

interface RoleQueryResult {
  id: number;
  name: string;
}

export class GetUserRolesSql {
  async getUserRolesSql(userId?: number): Promise<RoleQueryResult[]> {
    const query = userId
      ? `SELECT roles.* 
         FROM roles 
         INNER JOIN userRoles 
         ON roles.id = userRoles.roleId 
         WHERE userRoles.userId = :userId`
      : `SELECT * FROM userRoles`;
    
    try {
      const results: RoleQueryResult[] = await sequelize.query(query, {
        replacements: userId ? { userId } : undefined,
        type: QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener los roles de usuario.');
    }
  }

  async getTotalUserRoles(userId: number): Promise<number> {
    const query = `SELECT COUNT(*) AS total 
                   FROM userRoles 
                   WHERE userId = :userId`;
    try {
      const results = await sequelize.query(query, {
        replacements: { userId },
        type: QueryTypes.SELECT,
      });
      const total = (results[0] as any).total;
      return total;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener el total de roles de usuario.');
    }
  }
}


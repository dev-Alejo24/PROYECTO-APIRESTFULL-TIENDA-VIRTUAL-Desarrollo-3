import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetTotalUserRolesSql {
  async getTotalUserRoles(userId: number): Promise<number> {
    const query = `
      SELECT COUNT(*) AS total
      FROM userRoles
      WHERE userId = :userId
    `;

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

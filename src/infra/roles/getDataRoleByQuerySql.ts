import { QueryTypes } from "sequelize";
import sequelize from "../../config/database";

interface RoleQueryResult {
  id: number;
  name: string;
}

export class RoleByIdSql {
  async roleByIdSql(id: number): Promise<RoleQueryResult[]> {
    const query = `SELECT * FROM roles WHERE id = :id`;
    try {
      const results: RoleQueryResult[] = await sequelize.query(query, {
        replacements: { id }, // Asegúrate de pasar el id como reemplazo
        type: QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error getDataByQuerySql', error);
      throw new Error('No se puede detallar roles');
    }
  }
}
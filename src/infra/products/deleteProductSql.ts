import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class DeleteProductSql {
  async deleteProductSql(id: number): Promise<any> {
    const query = "DELETE FROM products WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.DELETE,
    });
  }
}

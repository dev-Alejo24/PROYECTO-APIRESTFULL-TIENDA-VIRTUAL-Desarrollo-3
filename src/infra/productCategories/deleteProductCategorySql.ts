import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class DeleteProductCategorySql {
  async deleteProductCategorySql(id: number): Promise<any> {
    const query = "DELETE FROM productCategories WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.DELETE,
    });
  }
}

import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetProductCategorySql {
  async getProductCategoriesSql(): Promise<any> {
    const query = "SELECT * FROM productCategories";
    return await sequelize.query(query, { type: QueryTypes.SELECT });
  }

  async getProductCategoryByIdSql(id: number): Promise<any> {
    const query = "SELECT * FROM productCategories WHERE id = :id";
    const [result] = await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.SELECT,
    });
    return result || null;
  }
}

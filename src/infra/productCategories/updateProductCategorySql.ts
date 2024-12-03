import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class UpdateProductCategorySql {
  async updateProductCategorySql(id: number, data: { categoryName: string, description: string }): Promise<any> {
    const query = "UPDATE productCategories SET categoryName = :categoryName, description = :description, updatedAt = NOW() WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { ...data, id },
      type: QueryTypes.UPDATE,
    });
  }
}

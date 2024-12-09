import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class CreateProductCategorySql {
  async createProductCategorySql(data: { categoryName: string, description: string }): Promise<any> {
    const query = 'INSERT INTO productCategories (categoryName, description, createdAt, updatedAt) VALUES (:categoryName, :description, NOW(), NOW())';
    return sequelize.query(query, {
      replacements: data,
      type: QueryTypes.INSERT,
    });
  }
}

import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class UpdateProductSql {
  async updateProductSql(id: number, data: { name: string, description: string, price: number, idCategory: number }): Promise<any> {
    const query = "UPDATE products SET name = :name, description = :description, price = :price, idCategory = :idCategory, updatedAt = NOW() WHERE id = :id";
    return await sequelize.query(query, {
      replacements: { ...data, id },
      type: QueryTypes.UPDATE,
    });
  }
}

import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class CreateProductSql {
  async createProductSql(data: { name: string, description: string, price: number, idCategory: number }): Promise<any> {
    const query = "INSERT INTO products (name, description, price, idCategory, createdAt, updatedAt) VALUES (:name, :description, :price, :idCategory, NOW(), NOW())";
    return await sequelize.query(query, {
      replacements: data,
      type: QueryTypes.INSERT,
    });
  }
}

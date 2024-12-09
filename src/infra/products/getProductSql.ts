import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

export class GetProductSql {
  async getProductsSql(): Promise<any> {
    const query = `SELECT p.*, c.categoryName 
                   FROM products p 
                   INNER JOIN productCategories c ON p.idCategory = c.id`;
    return sequelize.query(query, { type: QueryTypes.SELECT });
  }

  async getProductByIdSql(id: number): Promise<any> {
    const query = 'SELECT * FROM products WHERE id = :id';
    const [result] = await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.SELECT,
    });
    return result || null;
  }
}

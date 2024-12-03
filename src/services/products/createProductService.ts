import { CreateProductSql } from '../../infra/products/createProductSql';

export class CreateProductService {
  async createProduct(data: { name: string, description: string, price: number, idCategory: number }): Promise<any> {
    const productSql = new CreateProductSql();
    return await productSql.createProductSql(data);
  }
}

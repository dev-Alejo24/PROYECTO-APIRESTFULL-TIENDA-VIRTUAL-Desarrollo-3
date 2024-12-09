import { GetProductSql } from '../../infra/products/getProductSql';

export class GetProductService {
  async getAllProducts(): Promise<any> {
    const productSql = new GetProductSql();
    return productSql.getProductsSql();
  }

  async getProductById(id: number): Promise<any> {
    const productSql = new GetProductSql();
    return productSql.getProductByIdSql(id);
  }
}

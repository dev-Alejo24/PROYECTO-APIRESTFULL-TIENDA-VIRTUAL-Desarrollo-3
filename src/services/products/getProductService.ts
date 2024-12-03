import { GetProductSql } from '../../infra/products/getProductSql';

export class GetProductService {
  async getAllProducts(): Promise<any> {
    const productSql = new GetProductSql();
    return await productSql.getProductsSql();
  }

  async getProductById(id: number): Promise<any> {
    const productSql = new GetProductSql();
    return await productSql.getProductByIdSql(id);
  }
}

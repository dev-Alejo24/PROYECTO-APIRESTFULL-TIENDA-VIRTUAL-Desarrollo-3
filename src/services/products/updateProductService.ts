import { UpdateProductSql } from '../../infra/products/updateProductSql';

export class UpdateProductService {
  async updateProduct(id: number, data: { name: string, description: string, price: number, idCategory: number }): Promise<any> {
    const productSql = new UpdateProductSql();
    return productSql.updateProductSql(id, data);
  }
}

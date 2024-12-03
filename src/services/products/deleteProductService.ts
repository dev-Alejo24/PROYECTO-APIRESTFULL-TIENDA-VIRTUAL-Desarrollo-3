import { DeleteProductSql } from '../../infra/products/deleteProductSql';

export class DeleteProductService {
  async deleteProduct(id: number): Promise<any> {
    const productSql = new DeleteProductSql();
    return await productSql.deleteProductSql(id);
  }
}

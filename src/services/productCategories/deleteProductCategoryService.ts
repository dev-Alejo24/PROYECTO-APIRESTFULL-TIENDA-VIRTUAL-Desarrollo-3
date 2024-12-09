import { DeleteProductCategorySql } from '../../infra/productCategories/deleteProductCategorySql';

export class DeleteProductCategoryService {
  async deleteProductCategory(id: number): Promise<any> {
    const categorySql = new DeleteProductCategorySql();
    return categorySql.deleteProductCategorySql(id);
  }
}

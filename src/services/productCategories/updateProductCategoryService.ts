import { UpdateProductCategorySql } from '../../infra/productCategories/updateProductCategorySql';

export class UpdateProductCategoryService {
  async updateProductCategory(id: number, data: { categoryName: string, description: string }): Promise<any> {
    const categorySql = new UpdateProductCategorySql();
    return categorySql.updateProductCategorySql(id, data);
  }
}

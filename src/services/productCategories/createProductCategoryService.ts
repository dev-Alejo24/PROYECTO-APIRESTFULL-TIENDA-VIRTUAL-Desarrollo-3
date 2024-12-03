import { CreateProductCategorySql } from '../../infra/productCategories/createProductCategorySql';

export class CreateProductCategoryService {
  async createProductCategory(data: { categoryName: string, description: string }): Promise<any> {
    const categorySql = new CreateProductCategorySql();
    return await categorySql.createProductCategorySql(data);
  }
}

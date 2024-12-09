import { GetProductCategorySql } from '../../infra/productCategories/getproductCategorySql';

export class GetProductCategoryService {
  async getAllProductCategories(): Promise<any> {
    const categorySql = new GetProductCategorySql();
    return categorySql.getProductCategoriesSql();
  }

  async getProductCategoryById(id: number): Promise<any> {
    const categorySql = new GetProductCategorySql();
    return categorySql.getProductCategoryByIdSql(id);
  }
}

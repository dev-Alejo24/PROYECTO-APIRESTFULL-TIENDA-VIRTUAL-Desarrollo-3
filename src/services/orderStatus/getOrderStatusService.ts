import { GetOrderStatusSql } from '../../infra/orderStatus/getOrderStatuSql';

export class GetOrderStatusService {
  async getAllOrderStatuses(): Promise<any> {
    const orderStatusSql = new GetOrderStatusSql();
    return orderStatusSql.getOrderStatusesSql();
  }

  async getOrderStatusById(id: number): Promise<any> {
    const orderStatusSql = new GetOrderStatusSql();
    return orderStatusSql.getOrderStatusByIdSql(id);
  }
}

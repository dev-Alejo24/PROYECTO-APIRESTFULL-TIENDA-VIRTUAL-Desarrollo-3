import { CreateOrderStatusSql } from '../../infra/orderStatus/createOrderStatusSql';

export class CreateOrderStatusService {
  async createOrderStatus(data: { name: string }): Promise<any> {
    const orderStatusSql = new CreateOrderStatusSql();
    return orderStatusSql.createOrderStatusSql(data);
  }
}

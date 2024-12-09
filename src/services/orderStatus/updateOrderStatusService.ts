import { UpdateOrderStatusSql } from '../../infra/orderStatus/updateOrderStatusSql';

export class UpdateOrderStatusService {
  async updateOrderStatus(id: number, data: { name: string }): Promise<any> {
    const orderStatusSql = new UpdateOrderStatusSql();
    return orderStatusSql.updateOrderStatusSql(id, data);
  }
}

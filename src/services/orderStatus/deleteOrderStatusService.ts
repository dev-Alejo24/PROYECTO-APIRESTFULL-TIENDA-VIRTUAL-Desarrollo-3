import { DeleteOrderStatusSql } from '../../infra/orderStatus/deleteOrderStatusSql';

export class DeleteOrderStatusService {
  async deleteOrderStatus(id: number): Promise<any> {
    const orderStatusSql = new DeleteOrderStatusSql();
    return orderStatusSql.deleteOrderStatusSql(id);
  }
}

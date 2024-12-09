import { UpdateOrderDetailsSql } from '../../infra/orderDetails/updateOrderDetails';

export class UpdateOrderDetailsService {
  private orderDetailsSql = new UpdateOrderDetailsSql();

  async updateOrderDetail(id: number, data: Partial<any>) {
    if (!id || !data) throw new Error('El ID y los datos son requeridos.');
    return this.orderDetailsSql.updateOrderDetail(id, data);
  }
}

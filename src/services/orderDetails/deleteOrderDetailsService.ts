import { DeleteOrderDetailsSql } from '../../infra/orderDetails/deleteOrderDetails';

export class DeleteOrderDetailsService {
  private orderDetailsSql = new DeleteOrderDetailsSql();

  async deleteOrderDetail(id: number) {
    if (!id) throw new Error('El ID es requerido.');
    await this.orderDetailsSql.deleteOrderDetail(id);
  }
}

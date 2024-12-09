import { GetOrderDetailsSql } from '../../infra/orderDetails/getOrderDetails';

export class GetOrderDetailsService {
  private orderDetailsSql = new GetOrderDetailsSql();

  async getAllOrderDetails() {
    return this.orderDetailsSql.fetchAllOrderDetails();
  }

  async getOrderDetailById(id: number) {
    if (!id) throw new Error('El ID es requerido.');
    return this.orderDetailsSql.fetchOrderDetailById(id);
  }
}

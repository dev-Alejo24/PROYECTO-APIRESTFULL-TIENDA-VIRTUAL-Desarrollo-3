import { CreateOrderDetailsSql } from '../../infra/orderDetails/createOrderDetails';

export class CreateOrderDetailsService {
  private orderDetailsSql = new CreateOrderDetailsSql();

  async createOrderDetail(data: Partial<any>) {
    if (!data) throw new Error('Los datos del detalle del pedido son requeridos.');
    return await this.orderDetailsSql.createOrderDetail(data);
  }
}

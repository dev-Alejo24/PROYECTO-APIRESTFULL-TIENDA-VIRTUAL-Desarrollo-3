import OrderDetail from '../../models/orderDetailsModel';

export class CreateOrderDetailsSql {
  async createOrderDetail(data: Partial<OrderDetail>): Promise<OrderDetail> {
    try {
      const orderDetail = await OrderDetail.create(data);
      return orderDetail;
    } catch (error) {
      console.error('Error creando el detalle del pedido:', error);
      throw new Error('No se pudo crear el detalle del pedido.');
    }
  }
}

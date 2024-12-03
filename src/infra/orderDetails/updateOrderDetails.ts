import OrderDetail from '../../models/orderDetailsModel';

export class UpdateOrderDetailsSql {
  async updateOrderDetail(id: number, data: Partial<OrderDetail>): Promise<OrderDetail | null> {
    try {
      const orderDetail = await OrderDetail.findByPk(id);
      if (!orderDetail) {
        throw new Error('Detalle del pedido no encontrado.');
      }
      await orderDetail.update(data);
      return orderDetail;
    } catch (error) {
      console.error('Error actualizando el detalle del pedido:', error);
      throw new Error('No se pudo actualizar el detalle del pedido.');
    }
  }
}

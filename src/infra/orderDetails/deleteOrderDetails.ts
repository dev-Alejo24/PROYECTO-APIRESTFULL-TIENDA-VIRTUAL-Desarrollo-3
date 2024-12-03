import OrderDetail from '../../models/orderDetailsModel';

export class DeleteOrderDetailsSql {
  async deleteOrderDetail(id: number): Promise<void> {
    try {
      const orderDetail = await OrderDetail.findByPk(id);
      if (!orderDetail) {
        throw new Error('Detalle del pedido no encontrado.');
      }
      await orderDetail.destroy();
    } catch (error) {
      console.error('Error eliminando el detalle del pedido:', error);
      throw new Error('No se pudo eliminar el detalle del pedido.');
    }
  }
}

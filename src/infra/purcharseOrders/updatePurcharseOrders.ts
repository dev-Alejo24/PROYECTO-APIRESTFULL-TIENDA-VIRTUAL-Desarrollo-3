import PurchaseOrder from '../../models/purcharseOrdersModel';

export class UpdatePurchaseOrdersSql {
  async updatePurchaseOrder(id: number, data: Partial<PurchaseOrder>): Promise<PurchaseOrder | null> {
    try {
      const purchaseOrder = await PurchaseOrder.findByPk(id);
      if (!purchaseOrder) {
        throw new Error('Orden de compra no encontrada.');
      }
      await purchaseOrder.update(data);
      return purchaseOrder;
    } catch (error) {
      console.error('Error actualizando la orden de compra:', error);
      throw new Error('No se pudo actualizar la orden de compra.');
    }
  }
}

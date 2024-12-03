import PurchaseOrder from '../../models/purcharseOrdersModel';

export class DeletePurchaseOrdersSql {
  async deletePurchaseOrder(id: number): Promise<void> {
    try {
      const purchaseOrder = await PurchaseOrder.findByPk(id);
      if (!purchaseOrder) {
        throw new Error('Orden de compra no encontrada.');
      }
      await purchaseOrder.destroy();
    } catch (error) {
      console.error('Error eliminando la orden de compra:', error);
      throw new Error('No se pudo eliminar la orden de compra.');
    }
  }
}

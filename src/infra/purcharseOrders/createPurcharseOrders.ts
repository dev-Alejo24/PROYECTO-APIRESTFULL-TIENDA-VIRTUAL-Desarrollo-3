import PurchaseOrder from '../../models/purcharseOrdersModel';

export class CreatePurchaseOrdersSql {
  async createPurchaseOrder(data: Partial<PurchaseOrder>): Promise<PurchaseOrder> {
    try {
      const purchaseOrder = await PurchaseOrder.create(data);
      return purchaseOrder;
    } catch (error) {
      console.error('Error creando la orden de compra:', error);
      throw new Error('No se pudo crear la orden de compra.');
    }
  }
}

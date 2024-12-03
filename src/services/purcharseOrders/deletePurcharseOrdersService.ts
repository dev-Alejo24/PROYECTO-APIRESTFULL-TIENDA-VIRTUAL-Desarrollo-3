import { DeletePurchaseOrdersSql } from '../../infra/purcharseOrders/deletePurcharseOrders';

export class DeletePurchaseOrdersService {
  private purchaseOrdersSql = new DeletePurchaseOrdersSql();

  async deletePurchaseOrder(id: number) {
    if (!id) throw new Error('El ID es requerido.');
    await this.purchaseOrdersSql.deletePurchaseOrder(id);
  }
}

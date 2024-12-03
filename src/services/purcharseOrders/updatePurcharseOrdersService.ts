import { UpdatePurchaseOrdersSql } from '../../infra/purcharseOrders/updatePurcharseOrders';

export class UpdatePurchaseOrdersService {
  private purchaseOrdersSql = new UpdatePurchaseOrdersSql();

  async updatePurchaseOrder(id: number, data: Partial<any>) {
    if (!id || !data) throw new Error('El ID y los datos son requeridos.');
    return await this.purchaseOrdersSql.updatePurchaseOrder(id, data);
  }
}

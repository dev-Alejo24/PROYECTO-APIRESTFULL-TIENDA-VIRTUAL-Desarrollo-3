import { CreatePurchaseOrdersSql } from '../../infra/purcharseOrders/createPurcharseOrders';

export class CreatePurchaseOrdersService {
  private purchaseOrdersSql = new CreatePurchaseOrdersSql();

  async createPurchaseOrder(data: Partial<any>) {
    if (!data) throw new Error('Los datos de la orden de compra son requeridos.');
    return this.purchaseOrdersSql.createPurchaseOrder(data);
  }
}

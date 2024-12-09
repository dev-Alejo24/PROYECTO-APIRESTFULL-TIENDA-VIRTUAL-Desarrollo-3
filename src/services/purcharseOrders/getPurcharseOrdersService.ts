import { GetPurchaseOrdersSql } from '../../infra/purcharseOrders/getPurcharseOrders';

export class GetPurchaseOrdersService {
  private purchaseOrdersSql = new GetPurchaseOrdersSql();

  async getAllPurchaseOrders() {
    return this.purchaseOrdersSql.fetchAllPurchaseOrders();
  }

  async getPurchaseOrderById(id: number) {
    if (!id) throw new Error('El ID es requerido.');
    return this.purchaseOrdersSql.fetchPurchaseOrderById(id);
  }
}

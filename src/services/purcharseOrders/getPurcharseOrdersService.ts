import { GetPurchaseOrdersSql } from '../../infra/purcharseOrders/getPurcharseOrders';

export class GetPurchaseOrdersService {
  private purchaseOrdersSql = new GetPurchaseOrdersSql();

  async getAllPurchaseOrders() {
    return await this.purchaseOrdersSql.fetchAllPurchaseOrders();
  }

  async getPurchaseOrderById(id: number) {
    if (!id) throw new Error('El ID es requerido.');
    return await this.purchaseOrdersSql.fetchPurchaseOrderById(id);
  }
}

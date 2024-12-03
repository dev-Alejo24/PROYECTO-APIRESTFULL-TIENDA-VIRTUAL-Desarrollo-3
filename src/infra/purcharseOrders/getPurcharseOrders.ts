import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

interface PurchaseOrderQueryResult {
  id: number;
  idSupplier: number;
  idStatus: number;
  createdAt: Date;
  updatedAt: Date;
}

export class GetPurchaseOrdersSql {
  async fetchAllPurchaseOrders(): Promise<PurchaseOrderQueryResult[]> {
    const query = `
      SELECT * 
      FROM purchaseOrders
    `;
    try {
      const results: PurchaseOrderQueryResult[] = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener las órdenes de compra.');
    }
  }

  async fetchPurchaseOrderById(id: number): Promise<PurchaseOrderQueryResult | null> {
    const query = `
      SELECT * 
      FROM purchaseOrders 
      WHERE id = :id
    `;
    try {
      const [result]: PurchaseOrderQueryResult[] = await sequelize.query(query, {
        replacements: { id },
        type: QueryTypes.SELECT,
      });
      return result || null;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener la orden de compra.');
    }
  }
}

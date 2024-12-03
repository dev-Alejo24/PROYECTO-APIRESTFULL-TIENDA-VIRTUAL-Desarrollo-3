import { QueryTypes } from 'sequelize';
import sequelize from '../../config/database';

interface OrderDetailQueryResult {
  id: number;
  idPurchaseOrder: number;
  idProduct: number;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export class GetOrderDetailsSql {
  async fetchAllOrderDetails(): Promise<OrderDetailQueryResult[]> {
    const query = `
      SELECT * 
      FROM orderDetails
    `;
    try {
      const results: OrderDetailQueryResult[] = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return results;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudieron obtener los detalles del pedido.');
    }
  }

  async fetchOrderDetailById(id: number): Promise<OrderDetailQueryResult | null> {
    const query = `
      SELECT * 
      FROM orderDetails 
      WHERE id = :id
    `;
    try {
      const [result]: OrderDetailQueryResult[] = await sequelize.query(query, {
        replacements: { id },
        type: QueryTypes.SELECT,
      });
      return result || null;
    } catch (error) {
      console.error('Error ejecutando la consulta:', error);
      throw new Error('No se pudo obtener el detalle del pedido.');
    }
  }
}

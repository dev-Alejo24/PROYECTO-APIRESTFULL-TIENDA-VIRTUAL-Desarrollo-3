import { Request, Response } from 'express';
import { DeletePurchaseOrdersService } from '../../services/purcharseOrders/deletePurcharseOrdersService';

const service = new DeletePurchaseOrdersService();

export const deletePurchaseOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await service.deletePurchaseOrder(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

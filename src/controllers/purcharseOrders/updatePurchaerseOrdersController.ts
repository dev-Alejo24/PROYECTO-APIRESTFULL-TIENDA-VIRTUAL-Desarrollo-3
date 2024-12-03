import { Request, Response } from 'express';
import { UpdatePurchaseOrdersService } from '../../services/purcharseOrders/updatePurcharseOrdersService';

const service = new UpdatePurchaseOrdersService();

export const updatePurchaseOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const updatedOrder = await service.updatePurchaseOrder(id, data);
    res.status(200).json(updatedOrder);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

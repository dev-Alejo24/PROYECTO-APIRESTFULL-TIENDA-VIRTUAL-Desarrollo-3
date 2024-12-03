import { Request, Response } from 'express';
import { CreatePurchaseOrdersService } from '../../services/purcharseOrders/createPurcharseOrdersService';

const service = new CreatePurchaseOrdersService();

export const createPurchaseOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newOrder = await service.createPurchaseOrder(data);
    res.status(201).json(newOrder);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

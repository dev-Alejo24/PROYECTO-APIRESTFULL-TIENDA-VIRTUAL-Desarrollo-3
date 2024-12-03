import { Request, Response } from 'express';
import { GetPurchaseOrdersService } from '../../services/purcharseOrders/getPurcharseOrdersService';

const service = new GetPurchaseOrdersService();

export const getAllPurchaseOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await service.getAllPurchaseOrders();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getPurchaseOrderById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const order = await service.getPurchaseOrderById(id);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

import { Request, Response } from 'express';
import { CreateOrderStatusService } from '../../services/orderStatus/createOrderStatusService';

export const createOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const service = new CreateOrderStatusService();
    const newStatus = await service.createOrderStatus({ name });
    res.status(201).json(newStatus);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

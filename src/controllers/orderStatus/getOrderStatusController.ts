import { Request, Response } from 'express';
import { GetOrderStatusService } from '../../services/orderStatus/getOrderStatusService';

export const getOrderStatuses = async (_req: Request, res: Response): Promise<void> => {
  try {
    const service = new GetOrderStatusService();
    const statuses = await service.getAllOrderStatuses();
    res.status(200).json(statuses);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrderStatusById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new GetOrderStatusService();
    const status = await service.getOrderStatusById(Number(id));
    res.status(200).json(status);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

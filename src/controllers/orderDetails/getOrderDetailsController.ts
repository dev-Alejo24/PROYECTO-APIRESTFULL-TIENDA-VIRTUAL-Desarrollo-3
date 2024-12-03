import { Request, Response } from 'express';
import { GetOrderDetailsService } from '../../services/orderDetails/getOrderDetailsService';

const service = new GetOrderDetailsService();

export const getAllOrderDetails = async (_req: Request, res: Response) => {
  try {
    const details = await service.getAllOrderDetails();
    res.status(200).json(details);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrderDetailById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const detail = await service.getOrderDetailById(id);
    res.status(200).json(detail);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

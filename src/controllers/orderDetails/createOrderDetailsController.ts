import { Request, Response } from 'express';
import { CreateOrderDetailsService } from '../../services/orderDetails/createOrderDetailsService';

const service = new CreateOrderDetailsService();

export const createOrderDetail = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newDetail = await service.createOrderDetail(data);
    res.status(201).json(newDetail);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

import { Request, Response } from 'express';
import { DeleteOrderDetailsService } from '../../services/orderDetails/deleteOrderDetailsService';

const service = new DeleteOrderDetailsService();

export const deleteOrderDetail = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await service.deleteOrderDetail(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

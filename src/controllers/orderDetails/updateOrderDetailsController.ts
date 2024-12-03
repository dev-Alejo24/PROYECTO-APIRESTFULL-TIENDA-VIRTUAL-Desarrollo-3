import { Request, Response } from 'express';
import { UpdateOrderDetailsService } from '../../services/orderDetails/updateOrderDetailsService';

const service = new UpdateOrderDetailsService();

export const updateOrderDetail = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const updatedDetail = await service.updateOrderDetail(id, data);
    res.status(200).json(updatedDetail);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

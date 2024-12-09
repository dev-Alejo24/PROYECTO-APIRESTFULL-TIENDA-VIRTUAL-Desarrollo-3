import { Request, Response } from 'express';
import { UpdateOrderStatusService } from '../../services/orderStatus/updateOrderStatusService';

export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const service = new UpdateOrderStatusService();
    const updatedStatus = await service.updateOrderStatus(Number(id), { name });
    res.status(200).json(updatedStatus);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
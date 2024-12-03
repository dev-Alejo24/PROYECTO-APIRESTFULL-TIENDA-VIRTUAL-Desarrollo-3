import { Request, Response } from 'express';
import { DeleteOrderStatusService } from '../../services/orderStatus/deleteOrderStatusService';

export const deleteOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new DeleteOrderStatusService();
    await service.deleteOrderStatus(Number(id));
    res.status(200).json({ message: 'Estado eliminado correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

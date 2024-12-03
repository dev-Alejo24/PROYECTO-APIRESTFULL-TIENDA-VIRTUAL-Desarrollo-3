import { Request, Response } from 'express';
import { DeleteProductService } from '../../services/products/deleteProductService';

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new DeleteProductService();
    await service.deleteProduct(Number(id));
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

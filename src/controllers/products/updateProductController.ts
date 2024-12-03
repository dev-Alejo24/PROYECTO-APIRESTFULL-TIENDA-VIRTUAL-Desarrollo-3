import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/products/updateProductService';

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, price, idCategory } = req.body;
    const service = new UpdateProductService();
    const updatedProduct = await service.updateProduct(Number(id), { name, description, price, idCategory });
    res.status(200).json(updatedProduct);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

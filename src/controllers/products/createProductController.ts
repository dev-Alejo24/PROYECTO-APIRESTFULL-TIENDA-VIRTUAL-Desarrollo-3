import { Request, Response } from 'express';
import { CreateProductService } from '../../services/products/createProductService';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, idCategory } = req.body;
    const service = new CreateProductService();
    const newProduct = await service.createProduct({ name, description, price, idCategory });
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

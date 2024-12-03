import { Request, Response } from 'express';
import { GetProductService } from '../../services/products/getProductService';

export const getProducts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const service = new GetProductService();
    const products = await service.getAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new GetProductService();
    const product = await service.getProductById(Number(id));
    res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

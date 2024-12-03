import { Request, Response } from 'express';
import { GetProductCategoryService } from '../../services/productCategories/getProductCategoryService';

export const getProductCategories = async (_req: Request, res: Response): Promise<void> => {
  try {
    const service = new GetProductCategoryService();
    const categories = await service.getAllProductCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new GetProductCategoryService();
    const category = await service.getProductCategoryById(Number(id));
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

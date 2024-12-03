import { Request, Response } from 'express';
import { CreateProductCategoryService } from '../../services/productCategories/createProductCategoryService';

export const createProductCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { categoryName, description } = req.body;
    const service = new CreateProductCategoryService();
    const newCategory = await service.createProductCategory({ categoryName, description });
    res.status(201).json(newCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

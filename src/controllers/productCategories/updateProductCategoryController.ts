import { Request, Response } from 'express';
import { UpdateProductCategoryService } from '../../services/productCategories/updateProductCategoryService';

export const updateProductCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { categoryName, description } = req.body;
    const service = new UpdateProductCategoryService();
    const updatedCategory = await service.updateProductCategory(Number(id), { categoryName, description });
    res.status(200).json(updatedCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

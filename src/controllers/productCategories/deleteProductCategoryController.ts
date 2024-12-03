import { Request, Response } from 'express';
import { DeleteProductCategoryService } from '../../services/productCategories/deleteProductCategoryService';

export const deleteProductCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service = new DeleteProductCategoryService();
    await service.deleteProductCategory(Number(id));
    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

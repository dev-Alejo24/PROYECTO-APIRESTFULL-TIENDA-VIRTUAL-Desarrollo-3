// controllers/createRoleController.ts
import { Request, Response } from 'express';
import { CreateRoleService } from '../../services/roles/createRoleService';

export const createRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const roleService = new CreateRoleService();
    const newRole = await roleService.createRole({ name });
    res.status(201).json({ message: 'Rol creado', role: newRole });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

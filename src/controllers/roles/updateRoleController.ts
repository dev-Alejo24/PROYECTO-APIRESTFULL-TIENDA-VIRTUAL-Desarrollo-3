// controllers/updateRoleController.ts
import { Request, Response } from 'express';
import { UpdateRoleService } from '../../services/roles/updateRoleService';

export const updateRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params ? Number(req.params.roleId) : null;
    const { name } = req.body;
    const roleService = new UpdateRoleService();
    const updatedRole = await roleService.updateRole(roleId, name);
    res.status(200).json({ message: 'Rol actualizado', role: updatedRole });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

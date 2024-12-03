// controllers/deleteRoleController.ts
import { Request, Response } from 'express';
import { DeleteRoleService } from '../../services/roles/deleteRoleService';

export const deleteRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params ? Number(req.params.roleId) : null;
    const roleService = new DeleteRoleService();
    const deletedCount = await roleService.deleteRole(roleId);
    res.status(200).json({ message: 'Rol eliminado', deletedCount });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// controllers/roles/deleteRoleController.ts
import { Request, Response } from 'express';
import { DeleteRoleService } from '../../services/roles/deleteRoleService';

export const deleteRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params ? Number(req.params.roleId) : null;
    if (roleId === null) {
      res.status(400).json({ error: 'ID del rol no proporcionado' });
      return;
    }
    const roleService = new DeleteRoleService();
    const deletedCount = await roleService.deleteRole(roleId);
    if (deletedCount > 0) {
      res.status(200).json({ message: 'Rol eliminado', deletedCount });
    } else {
      res.status(404).json({ error: 'Rol no encontrado' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

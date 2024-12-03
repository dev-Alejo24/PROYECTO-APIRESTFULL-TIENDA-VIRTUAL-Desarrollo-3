import { Request, Response } from 'express';
import { UpdateUserRolesService } from '../../services/userRoles/updateUserRoleService';

export const updateUserRoles = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params ? Number(req.params.userId) : null;
    const { roleIds } = req.body;
    const userRoleService = new UpdateUserRolesService();
    const updatedCount = await userRoleService.updateUserRoles(userId, roleIds);
    res.status(200).json({ message: 'Roles actualizados', updatedCount });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

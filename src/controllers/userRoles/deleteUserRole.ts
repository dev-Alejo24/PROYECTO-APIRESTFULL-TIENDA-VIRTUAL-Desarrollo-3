import { Request, Response } from 'express';
import { DeleteUserRoleService } from '../../services/userRoles/deleteUserRoleService'

export const deleteUserRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, roleId } = req.params;
    const userRoleService = new DeleteUserRoleService();
    const deletedRows = await userRoleService.deleteUserRole(Number(userId), Number(roleId));
    res.status(200).json({ message: 'Rol eliminado', deletedRows });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

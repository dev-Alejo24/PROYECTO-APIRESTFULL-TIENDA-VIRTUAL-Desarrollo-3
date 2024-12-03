import { Request, Response } from 'express';
import { GetUserRolesService } from '../../services/userRoles/getUserRoleService';

export const getUserRoles = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params?.userId ? Number(req.params.userId) : undefined;
    const userRoleService = new GetUserRolesService();
    const roles = await userRoleService.getUserRoles(userId);
    res.status(200).json({ roles });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

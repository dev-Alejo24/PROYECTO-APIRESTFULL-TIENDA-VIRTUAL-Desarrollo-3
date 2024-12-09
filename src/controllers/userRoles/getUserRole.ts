import { Request, Response } from 'express';
import { GetUserRolesService } from '../../services/userRoles/getUserRoleService';

export const getUserRoles = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.params?.userId ? Number(req.params.userId) : undefined;

    if (!userId) {
      return res.status(400).json({ error: 'El ID del usuario es requerido.' });
    }

    const userRoleService = new GetUserRolesService();
    const roles = await userRoleService.getUserRoles(userId);

    if (!roles.length) {
      return res.status(404).json({ message: 'No se encontraron roles para el usuario.' });
    }

    res.status(200).json({ roles });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

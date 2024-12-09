import { Request, Response } from 'express';
import { GetUserRolesService } from '../../services/userRoles/getTotalUserRolesServivce';

export const getTotalUserRoles = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.params?.userId ? Number(req.params.userId) : undefined;

    if (!userId) {
      return res.status(400).json({ error: 'El ID del usuario es requerido.' });
    }

    const userRoleService = new GetUserRolesService();
    const totalRoles = await userRoleService.getTotalUserRoles(userId);

    res.status(200).json({ userId, totalRoles });
  } catch (error: any) {
    console.error('Error al calcular el total de roles:', error);
    res.status(500).json({ error: error.message });
  }
};

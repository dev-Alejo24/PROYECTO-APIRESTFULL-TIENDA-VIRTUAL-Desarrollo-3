import { Request, Response } from 'express';
import { UpdateUserRolesService } from '../../services/userRoles/updateUserRoleService';

export const updateUserRoles = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.params ? Number(req.params.userId) : null;
    const { roleIds } = req.body;

    // Validación básica
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'El ID del usuario no es válido.' });
    }

    if (!Array.isArray(roleIds) || !roleIds.every(Number.isInteger)) {
      return res.status(400).json({ error: 'roleIds debe ser un array de números válidos.' });
    }

    const userRoleService = new UpdateUserRolesService();
    const updatedCount = await userRoleService.updateUserRoles(userId, roleIds);

    res.status(200).json({ message: 'Roles actualizados correctamente.', updatedCount });
  } catch (error: any) {
    console.error('Error en updateUserRoles:', error);
    res.status(500).json({ error: error.message || 'Error interno del servidor.' });
  }
};

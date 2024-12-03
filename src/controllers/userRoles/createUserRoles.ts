import { Request, Response } from 'express';
import { CreateUserRoleService } from '../../services/userRoles/createUserRoleService';

export const createUserRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, roleId } = req.body;
    const userRoleService = new CreateUserRoleService();
    const newRole = await userRoleService.createUserRole( userId, roleId ); // quitamos {}
    res.status(201).json({ message: 'Rol creado', newRole });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

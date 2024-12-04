import { Request, Response } from 'express';
import { GetRoleSql } from '../../infra/roles/getRole';

export const countRoles = async (_req: Request, res: Response): Promise<void> => {
  try {
    const roleService = new GetRoleSql();
    const totalRoles = await roleService.countRoles();
    res.status(200).json({ total: totalRoles });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

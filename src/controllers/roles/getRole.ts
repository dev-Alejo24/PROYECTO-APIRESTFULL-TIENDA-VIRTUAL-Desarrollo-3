// controllers/getRoleController.ts
import { Request, Response } from 'express';
import { GetRoleSql } from '../../infra/roles/getRole';

export const getRoles = async (_req: Request, res: Response): Promise<void> => {
  try {
    const roleService = new GetRoleSql();
    const roles = await roleService.getRolesSql();
    res.status(200).json({ roles });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRoleByIdSql = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params ? Number(req.params.roleId) : null;
    const roleService = new GetRoleSql();
    const role = await roleService.getRoleByIdSql(roleId);
    res.status(200).json({ role });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

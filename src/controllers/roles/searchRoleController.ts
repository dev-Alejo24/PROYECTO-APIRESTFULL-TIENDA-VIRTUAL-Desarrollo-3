import { Request, Response } from 'express';
import { GetRoleSql } from '../../infra/roles/getRole';

export const searchRoleByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name as string;
    const getRoleSql = new GetRoleSql();
    const roles = await getRoleSql.getRolesByName(name);
    res.status(200).json({ roles });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

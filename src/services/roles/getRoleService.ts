// services/getRoleService.ts
import { GetRoleSql } from '../../infra/roles/getRole';

export class GetRoleService {
  async getRoles(): Promise<any> {
    const getRoleSql = new GetRoleSql();
    const roles = await getRoleSql.getRolesSql();
    return roles;
  }

  async getRoleById(roleId: number): Promise<any> {
    const getRoleSql = new GetRoleSql();
    const role = await getRoleSql.getRoleByIdSql(roleId);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    return role;
  }
}

// services/updateRoleService.ts
import { UpdateRoleSql } from '../../infra/roles/updateRole';

export class UpdateRoleService {
  async updateRole(roleId: number, roleData: { name: string }): Promise<any> {
    const updateRoleSql = new UpdateRoleSql();
    const updatedRole = await updateRoleSql.updateRoleSql(roleId, roleData);
    return updatedRole;
  }
}

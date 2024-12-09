// services/roles/deleteRoleService.ts
import { DeleteRoleSql } from '../../infra/roles/deleteRole';

export class DeleteRoleService {
  async deleteRole(roleId: number): Promise<number> {
    const roleSql = new DeleteRoleSql();
    const deletedCount = await roleSql.deleteRoleSql(roleId);
    return deletedCount;
  }
}

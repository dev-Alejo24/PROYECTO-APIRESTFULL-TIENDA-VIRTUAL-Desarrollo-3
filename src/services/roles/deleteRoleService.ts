// services/deleteRoleService.ts
import { DeleteRoleSql } from '../../infra/roles/deleteRole';

export class DeleteRoleService {
  async deleteRole(roleId: number): Promise<any> {
    const deleteRoleSql = new DeleteRoleSql();
    const deletedCount = await deleteRoleSql.deleteRoleSql(roleId);
    return deletedCount;
  }
}

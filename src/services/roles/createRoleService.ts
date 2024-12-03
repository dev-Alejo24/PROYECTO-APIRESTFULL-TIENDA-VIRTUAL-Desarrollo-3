// services/createRoleService.ts
import { CreateRoleSql } from '../../infra/roles/createRoles';

export class CreateRoleService {
  async createRole(roleData: { name: string}): Promise<any> {
    const createRoleSql = new CreateRoleSql();
    const newRole = await createRoleSql.createRoleSql(roleData);
    return newRole;
  }
}

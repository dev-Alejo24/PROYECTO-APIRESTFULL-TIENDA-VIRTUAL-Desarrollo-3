import { CreateUserRoleSql } from '../../infra/userRoles/createUserRole';

export class CreateUserRoleService {
  async createUserRole(userId: number, roleId: number): Promise<any> {
    console.log({ userId, roleId }, 'Parámetros para crear');
    const createRole = new CreateUserRoleSql();
    const newRoleId = await createRole.createUserRoleSql({ userId, roleId });// agregamos {}
    return { userId, roleId, id: newRoleId };
  }
}

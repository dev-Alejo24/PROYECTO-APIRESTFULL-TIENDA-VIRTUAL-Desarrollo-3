import { UpdateUserRolesSql } from '../../infra/userRoles/updateUserRoles';
import { GetUserRolesSql } from '../../infra/userRoles/getUserRole';

export class UpdateUserRolesService {
  async updateUserRoles(userId: number, roleIds: number[]): Promise<number> {
    console.log({ userId, roleIds }, 'Datos para actualizar');
    const getUserRoles = new GetUserRolesSql();
    const existingRoles = await getUserRoles.getUserRolesSql(userId);
    if (!existingRoles.length) {
      throw new Error('El usuario no tiene roles existentes.');
    }

    const updateRoles = new UpdateUserRolesSql();
    const updatedCount = await updateRoles.updateUserRolesSql(userId, roleIds);
    return updatedCount;
  }
}

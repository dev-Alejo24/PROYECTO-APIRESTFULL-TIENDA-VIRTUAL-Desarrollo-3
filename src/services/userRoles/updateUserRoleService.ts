import { UpdateUserRolesSql } from '../../infra/userRoles/updateUserRoles';
import { GetUserRolesSql } from '../../infra/userRoles/getUserRole';

export class UpdateUserRolesService {
  async updateUserRoles(userId: number, roleIds: number[]): Promise<number> {
    console.log({ userId, roleIds }, 'Datos para actualizar');

    // Validar que el usuario tenga roles existentes
    const getUserRoles = new GetUserRolesSql();
    const existingRoles = await getUserRoles.getUserRolesSql(userId);

    if (!existingRoles.length) {
      throw new Error('El usuario no tiene roles existentes. No se puede realizar la actualización.');
    }

    // Actualizar roles utilizando la capa de infraestructura
    const updateRoles = new UpdateUserRolesSql();
    const updatedCount = await updateRoles.updateUserRolesSql(userId, roleIds);

    return updatedCount;
  }
}

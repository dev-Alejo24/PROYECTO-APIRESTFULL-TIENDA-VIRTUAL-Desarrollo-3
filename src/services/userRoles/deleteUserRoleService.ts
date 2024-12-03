import { DeleteUserRoleSql } from '../../infra/userRoles/deleteUserRole';

export class DeleteUserRoleService {
  async deleteUserRole(userId: number, roleId: number): Promise<number> {
    console.log({ userId, roleId }, 'Parámetros para eliminar');
    const deleteRole = new DeleteUserRoleSql();
    const affectedRows = await deleteRole.deleteUserRoleSql(userId, roleId);
    if (!affectedRows) {
      throw new Error('No se encontró la relación usuario-rol para eliminar.');
    }
    return affectedRows;
  }
}

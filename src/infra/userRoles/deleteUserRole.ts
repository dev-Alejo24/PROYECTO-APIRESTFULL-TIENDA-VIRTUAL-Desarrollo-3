import UserRole from '../../models/userRolesModel';

export class DeleteUserRoleSql {
  async deleteUserRoleSql(userId: number, roleId: number): Promise<number> {
    const affectedRows = await UserRole.destroy({
      where: { userId, roleId },
    });
    return affectedRows;
  }
}

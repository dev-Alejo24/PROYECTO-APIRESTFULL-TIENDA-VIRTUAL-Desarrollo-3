import UserRole from '../../models/userRolesModel';

export class CreateUserRoleSql {
  async createUserRoleSql(data: Partial<UserRole>): Promise<UserRole> {
    console.log(data, 'data');
    const userRole = await UserRole.create(data); // Usa el método create del modelo
    return userRole;
  }
}

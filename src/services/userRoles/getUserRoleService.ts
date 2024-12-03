import { GetUserRolesSql } from '../../infra/userRoles/getUserRole';

export class GetUserRolesService {
  async getUserRoles(userId?: number): Promise<any> {
    console.log(userId, 'userId recibido');
    const userRoles = new GetUserRolesSql();
    const roles = await userRoles.getUserRolesSql(userId);
    if (!roles.length) {
      throw new Error('No se encontraron roles para el usuario.');
    }
    return roles;
  }
}

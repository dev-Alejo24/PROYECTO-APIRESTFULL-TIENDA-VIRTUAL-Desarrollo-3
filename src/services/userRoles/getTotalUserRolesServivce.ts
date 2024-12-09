import { GetTotalUserRolesSql } from '../../infra/userRoles/getTotalUserRoles';

export class GetUserRolesService {
  async getTotalUserRoles(userId: number): Promise<number> {
    const totalUserRolesSql = new GetTotalUserRolesSql();
    const totalRoles = await totalUserRolesSql.getTotalUserRoles(userId);
    return totalRoles;
  }
}

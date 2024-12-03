import People from '../models/popleModel';

export class DeletePeopleSql {
  async deletePeopleSql(userId: number) : Promise<number> {
    const user = await People.destroy({ where: { userId } });
    return user;
  }
}

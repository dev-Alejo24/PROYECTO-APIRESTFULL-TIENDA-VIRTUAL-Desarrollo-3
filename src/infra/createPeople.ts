import People from "../models/popleModel";

export class CreatePeopleSql {
    async createPeopleSql(data:Partial<People>) :Promise<People> {
      console.log(data, 'data');
      const user = await People.create(data);
      return user;
    }
  }
  
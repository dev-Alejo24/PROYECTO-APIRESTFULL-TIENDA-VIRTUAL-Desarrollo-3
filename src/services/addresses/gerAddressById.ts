import { GetAddressByIdInfra } from '../../infra/adrdesses/getAdressById';

export class GetAddressByIdService {
  private getAddressByIdInfra = new GetAddressByIdInfra();

  async execute(id: number) {
    return await this.getAddressByIdInfra.execute(id);
  }
}

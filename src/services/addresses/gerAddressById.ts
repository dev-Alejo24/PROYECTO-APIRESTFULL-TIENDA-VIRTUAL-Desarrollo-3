import { GetAddressByIdInfra } from '../../infra/addresses/getAdressById';

export class GetAddressByIdService {
  private getAddressByIdInfra = new GetAddressByIdInfra();

  async execute(id: number) {
    return this.getAddressByIdInfra.execute(id);
  }
}

import { GetAllAddressesInfra } from '../../infra/adrdesses/getAllAddresses';

export class GetAllAddressesService {
  private getAllAddressesInfra = new GetAllAddressesInfra();

  async execute() {
    return await this.getAllAddressesInfra.execute();
  }
}

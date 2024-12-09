import { GetAllAddressesInfra } from '../../infra/addresses/getAllAddresses';

export class GetAllAddressesService {
  private getAllAddressesInfra = new GetAllAddressesInfra();

  async execute() {
    return this.getAllAddressesInfra.execute();
  }
}

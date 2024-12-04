import { DeleteAddressInfra } from '../../infra/addresses/deleteAddresses';

export class DeleteAddressService {
  private deleteAddressInfra = new DeleteAddressInfra();

  async execute(id: number) {
    return await this.deleteAddressInfra.execute(id);
  }
}

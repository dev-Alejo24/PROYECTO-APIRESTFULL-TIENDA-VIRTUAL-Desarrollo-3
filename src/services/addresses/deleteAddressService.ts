import { DeleteAddressInfra } from '../../infra/addresses/deleteAddresses';

export class DeleteAddressService {
  private deleteAddressInfra = new DeleteAddressInfra();

  async execute(id: number) {
    return this.deleteAddressInfra.execute(id);
  }
}

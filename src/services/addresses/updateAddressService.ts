import { UpdateAddressInfra } from '../../infra/addresses/updateAddresses';

export class UpdateAddressService {
  private updateAddressInfra = new UpdateAddressInfra();

  async execute(id: number, data: any) {
    return this.updateAddressInfra.execute(id, data);
  }
}

import { CreateAddressInfra } from '../../infra/addresses/createAddress';

export class CreateAddressService {
  private createAddressInfra = new CreateAddressInfra();

  async execute(data: any) {
    return await this.createAddressInfra.execute(data);
  }
}

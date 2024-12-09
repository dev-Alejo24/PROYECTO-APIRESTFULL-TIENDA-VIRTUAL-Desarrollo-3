import Addresses from '../../models/adressModel';

export class CreateAddressInfra {
  async execute(data: Partial<Addresses>) {
    return Addresses.create(data);
  }
}

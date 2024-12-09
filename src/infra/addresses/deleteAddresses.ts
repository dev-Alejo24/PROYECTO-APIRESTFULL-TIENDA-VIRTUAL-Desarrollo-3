import Addresses from '../../models/adressModel';

export class DeleteAddressInfra {
  async execute(id: number) {
    return Addresses.destroy({ where: { id } });
  }
}

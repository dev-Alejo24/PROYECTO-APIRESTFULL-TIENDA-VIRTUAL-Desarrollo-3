import Addresses from '../../models/adressModel';

export class DeleteAddressInfra {
  async execute(id: number) {
    return await Addresses.destroy({ where: { id } });
  }
}

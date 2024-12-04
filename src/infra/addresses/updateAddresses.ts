import Addresses from '../../models/adressModel';

export class UpdateAddressInfra {
  async execute(id: number, data: Partial<Addresses>) {
    const [affectedRows] = await Addresses.update(data, { where: { id } });
    return affectedRows;
  }
}
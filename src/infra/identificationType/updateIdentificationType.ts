import IdentificationType from '../../models/identificationTypeModel';

export class UpdateIdentificationTypeInfra {
  async execute(id: number, data: Partial<IdentificationType>) {
    const [affectedRows] = await IdentificationType.update(data, { where: { id } });
    return affectedRows;
  }
}

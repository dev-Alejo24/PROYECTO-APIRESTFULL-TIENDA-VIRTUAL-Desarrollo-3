import IdentificationType from '../../models/identificationTypeModel';

export class CreateIdentificationTypeInfra {
  async execute(data: Partial<IdentificationType>) {
    return await IdentificationType.create(data);
  }
}

import IdentificationType from '../../models/identificationTypeModel';

export class CreateIdentificationTypeInfra {
  async execute(data: Partial<IdentificationType>) {
    return IdentificationType.create(data);
  }
}

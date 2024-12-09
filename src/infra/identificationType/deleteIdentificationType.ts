import IdentificationType from '../../models/identificationTypeModel';

export class DeleteIdentificationTypeInfra {
  async execute(id: number) {
    return IdentificationType.destroy({ where: { id } });
  }
}

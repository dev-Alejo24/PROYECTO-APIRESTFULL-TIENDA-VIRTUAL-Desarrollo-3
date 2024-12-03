import IdentificationType from '../../models/identificationTypeModel';

export class DeleteIdentificationTypeInfra {
  async execute(id: number) {
    return await IdentificationType.destroy({ where: { id } });
  }
}

import { DeleteIdentificationTypeInfra } from '../../infra/identificationType/deleteIdentificationType';

export class DeleteIdentificationTypeService {
  private deleteIdentificationTypeInfra = new DeleteIdentificationTypeInfra();

  async execute(id: number) {
    return this.deleteIdentificationTypeInfra.execute(id);
  }
}

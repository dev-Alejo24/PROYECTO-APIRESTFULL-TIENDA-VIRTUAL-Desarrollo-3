import { UpdateIdentificationTypeInfra } from '../../infra/identificationType/updateIdentificationType';

export class UpdateIdentificationTypeService {
  private updateIdentificationTypeInfra = new UpdateIdentificationTypeInfra();

  async execute(id: number, data: any) {
    return await this.updateIdentificationTypeInfra.execute(id, data);
  }
}

import { CreateIdentificationTypeInfra } from '../../infra/identificationType/createIdentificationType';

export class CreateIdentificationTypeService {
  private createIdentificationTypeInfra = new CreateIdentificationTypeInfra();

  async execute(data: any) {
    return await this.createIdentificationTypeInfra.execute(data);
  }
}

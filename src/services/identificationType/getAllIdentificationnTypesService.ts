import { GetAllIdentificationTypesInfra } from '../../infra/identificationType/getAllIdentificationTypes';

export class GetAllIdentificationTypesService {
  private getAllIdentificationTypesInfra = new GetAllIdentificationTypesInfra();

  async execute() {
    return await this.getAllIdentificationTypesInfra.execute();
  }
}

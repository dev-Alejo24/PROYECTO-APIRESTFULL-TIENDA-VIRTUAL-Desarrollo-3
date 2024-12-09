import { GetAllIdentificationTypesInfra } from '../../infra/identificationType/getAllIdentificationTypes';

export class GetAllIdentificationTypesService {
  private getAllIdentificationTypesInfra = new GetAllIdentificationTypesInfra();

  async execute() {
    return this.getAllIdentificationTypesInfra.execute();
  }
}

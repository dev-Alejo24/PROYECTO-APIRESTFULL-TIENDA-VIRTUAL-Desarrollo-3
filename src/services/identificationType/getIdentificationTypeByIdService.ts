import { GetIdentificationTypeByIdInfra } from '../../infra/identificationType/getIdentificationTypeById';

export class GetIdentificationTypeByIdService {
  private getIdentificationTypeByIdInfra = new GetIdentificationTypeByIdInfra();

  async execute(id: number) {
    return this.getIdentificationTypeByIdInfra.execute(id);
  }
}

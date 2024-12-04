import IdentificationType from '../../models/identificationTypeModel';

export class GetAllIdentificationTypesService {
  async execute(): Promise<IdentificationType[]> {
    try {
      const types = await IdentificationType.findAll();
      return types;
    } catch (error: any) {
      throw new Error('Error al obtener los tipos de identificación: ' + error.message);
    }
  }
}

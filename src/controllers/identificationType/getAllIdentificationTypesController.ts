import { Request, Response } from 'express';
import { GetAllIdentificationTypesService } from '../../services/identificationType/getAllIdentificationTypesService';

export class GetAllIdentificationTypesController {
  private getAllIdentificationTypesService = new GetAllIdentificationTypesService();

  async handle(_req: Request, res: Response): Promise<void> {
    try {
      const types = await this.getAllIdentificationTypesService.execute();
      res.status(200).json(types);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

import { Request, Response } from 'express';
import { CreateIdentificationTypeService } from '../../services/identificationType/createIdentificationTypeService';

export class CreateIdentificationTypeController {
  private createIdentificationTypeService = new CreateIdentificationTypeService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newType = await this.createIdentificationTypeService.execute(data);
      res.status(201).json(newType);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

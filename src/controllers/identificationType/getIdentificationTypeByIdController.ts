import { Request, Response } from 'express';
import { GetIdentificationTypeByIdService } from '../../services/identificationType/getIdentificationTypeByIdService';

export class GetIdentificationTypeByIdController {
  private getIdentificationTypeByIdService = new GetIdentificationTypeByIdService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const type = await this.getIdentificationTypeByIdService.execute(id);
      res.status(200).json(type);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

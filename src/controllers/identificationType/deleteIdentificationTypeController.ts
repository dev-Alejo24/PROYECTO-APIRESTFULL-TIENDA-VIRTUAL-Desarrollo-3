import { Request, Response } from 'express';
import { DeleteIdentificationTypeService } from '../../services/identificationType/deleteIdentificationTypeService';

export class DeleteIdentificationTypeController {
  private deleteIdentificationTypeService = new DeleteIdentificationTypeService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await this.deleteIdentificationTypeService.execute(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

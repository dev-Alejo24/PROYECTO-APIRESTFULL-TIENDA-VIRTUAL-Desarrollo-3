import { Request, Response } from 'express';
import { UpdateIdentificationTypeService } from '../../services/identificationType/updateIdentificationTypeService';

export class UpdateIdentificationTypeController {
  private updateIdentificationTypeService = new UpdateIdentificationTypeService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const updatedType = await this.updateIdentificationTypeService.execute(id, data);
      res.status(200).json(updatedType);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

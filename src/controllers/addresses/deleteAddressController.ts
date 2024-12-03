import { Request, Response } from 'express';
import { DeleteAddressService } from '../../services/addresses/deleteAddressService';

export class DeleteAddressController {
  private deleteAddressService = new DeleteAddressService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await this.deleteAddressService.execute(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

import { Request, Response } from 'express';
import { UpdateAddressService } from '../../services/addresses/updateAddressService';

export class UpdateAddressController {
  private updateAddressService = new UpdateAddressService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const updatedAddress = await this.updateAddressService.execute(id, data);
      res.status(200).json(updatedAddress);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

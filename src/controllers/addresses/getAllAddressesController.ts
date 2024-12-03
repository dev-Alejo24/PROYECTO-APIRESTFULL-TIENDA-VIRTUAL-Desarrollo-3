import { Request, Response } from 'express';
import { GetAllAddressesService } from '../../services/addresses/getAllAddressesService';

export class GetAllAddressesController {
  private getAllAddressesService = new GetAllAddressesService();

  async handle(_req: Request, res: Response): Promise<void> {
    try {
      const addresses = await this.getAllAddressesService.execute();
      res.status(200).json(addresses);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

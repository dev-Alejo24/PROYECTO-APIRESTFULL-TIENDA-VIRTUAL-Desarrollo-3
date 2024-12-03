import { Request, Response } from 'express';
import { CreateAddressService } from '../../services/addresses/createAddressService';

export class CreateAddressController {
  private createAddressService = new CreateAddressService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const newAddress = await this.createAddressService.execute(data);
      res.status(201).json(newAddress);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

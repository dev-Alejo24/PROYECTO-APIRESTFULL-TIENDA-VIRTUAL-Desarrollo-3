import { Request, Response } from 'express';
import { GetAddressByIdService } from '../../services/addresses/gerAddressById';

export class GetAddressByIdController {
  private getAddressByIdService = new GetAddressByIdService();

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const address = await this.getAddressByIdService.execute(id);
      res.status(200).json(address);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

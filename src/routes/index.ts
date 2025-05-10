import { SuccessResponse } from '@/configs/response';
import { Express, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default function routes(app: Express) {
  app.use('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json(SuccessResponse('API is running', null));
  });
}

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import envConfigs from './configs/env';
import { APIError } from './configs/error';
import { ErrorResponse } from './configs/response';
import routes from './routes';

const app = express();
const port = envConfigs.PORT;

app.use(cors());
app.use(express.json());

const run = async () => {
  try {
    routes(app);

    app.use((err: APIError | ZodError, req: Request, res: Response, _next: NextFunction) => {
      if (err instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse(err.errors[0].message));
      } else if (err instanceof APIError) {
        res.status(err.statusCode).json(ErrorResponse(err.message));
      } else {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR));
      }
    });

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();

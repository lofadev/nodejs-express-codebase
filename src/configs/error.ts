import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export class APIError extends Error {
  public readonly statusCode: StatusCodes;

  constructor(status: StatusCodes, message: string) {
    super();
    this.statusCode = status;
    this.message = message;
  }
}

const BadRequest = (message?: string) => new APIError(StatusCodes.BAD_REQUEST, message ?? ReasonPhrases.BAD_REQUEST);
const NotFound = (message?: string) => new APIError(StatusCodes.NOT_FOUND, message ?? ReasonPhrases.NOT_FOUND);
export { BadRequest, NotFound };

import { TStatus } from '@/types/status';

class BaseResponse<T> {
  public readonly status: TStatus;
  public readonly message: string;
  public readonly data: T;

  constructor(status: TStatus, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export const SuccessResponse = <T>(message: string, data: T) => new BaseResponse('SUCCESS', message, data);
export const ErrorResponse = (message: string) => new BaseResponse('ERROR', message, null);

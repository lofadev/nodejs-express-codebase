import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { APIError } from './error';

const envSchema = z.object({
  PORT: z.string(),
});

const envValues = envSchema.safeParse(process.env);

if (!envValues.success) {
  throw new APIError(StatusCodes.INTERNAL_SERVER_ERROR, 'Chưa thiết lập biến môi trường đầy đủ');
}

const { data: envConfigs } = envValues;

export default envConfigs;

import envConfigs from '@/configs/env';
import jwt from 'jsonwebtoken';
import ms from 'ms';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateAccessToken = (payload: any, expiresIn: number | ms.StringValue = '30s') => {
  return jwt.sign(payload, envConfigs.SIGNATURE_ACCESS_TOKEN, { expiresIn });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateRefreshToken = (payload: any, expiresIn: number | ms.StringValue = '2d') => {
  return jwt.sign(payload, envConfigs.SIGNATURE_REFRESH_TOKEN, { expiresIn });
};

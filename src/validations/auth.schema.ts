import z from 'zod';

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type TLoginPayload = z.infer<typeof loginSchema>;

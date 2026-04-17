import type { ApiType } from '@repo/api-type';
import { hc } from 'hono/client';

export const rpc = hc<ApiType>('http://localhost:8787');

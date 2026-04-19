import type { ApiType } from '@repo/api-type';
import { hc } from 'hono/client';

export const rpc = hc<ApiType>('https://sveltesse-turbo-api-dev.sithukhant.workers.dev');

export async function createRpc(fetch: typeof globalThis.fetch) {
  return hc<ApiType>('https://sveltesse-turbo-api-dev.sithukhant.workers.dev', { fetch });
}

import type { ApiType } from '@repo/api-type';
import { hc } from 'hono/client';

export const rpc = hc<ApiType>('https://sveltesse-turbo-api-dev.sithukhant.workers.dev');
// export const rpc = hc<ApiType>('http://localhost:8787');

export async function createRpc(env: Env) {
  return hc<ApiType>('https://sveltesse-turbo-api-dev.sithukhant.workers.dev', {
    fetch: env.API?.fetch.bind(env.API)
  });
}

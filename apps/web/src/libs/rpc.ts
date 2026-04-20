import type { ApiType } from '@repo/api-type';
import { hc } from 'hono/client';

import { PUBLIC_API_URL } from '$env/static/public';

export const rpc = hc<ApiType>(PUBLIC_API_URL);

export async function createRpc(env: Env) {
  return hc<ApiType>(PUBLIC_API_URL, {
    fetch: env.API?.fetch.bind(env.API)
  });
}

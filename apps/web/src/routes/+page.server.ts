import { createRpc } from '~/libs/rpc';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
  const rpc = await createRpc(platform?.env as Env);
  const res = await rpc.index.$get();
  const { message } = await res.json();

  return { message };
};

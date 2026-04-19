import { rpc } from '~/libs/rpc';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const res = await rpc.index.$get();
  const { message } = await res.json();

  return { message };
};

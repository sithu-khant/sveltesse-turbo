<script lang='ts'>
  import { onMount } from 'svelte';

  import { rpc } from '~/libs/rpc';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  let text = $state<string>('');

  onMount(async () => {
    try {
      const res = await rpc.index.$get();
      const { message } = await res.json();

      text = message;
    }
    catch (e) {
      console.error(e);
    }
  });
</script>

<h1>Web</h1>

<p>Message from client: {text}</p>
<p>Message from server: {data.message}</p>

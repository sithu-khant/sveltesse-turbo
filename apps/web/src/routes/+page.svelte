<script lang='ts'>
  import { onMount } from 'svelte';

  import { rpc } from '../libs/rpc';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  let text = $state<string>('');

  onMount(async () => {
    try {
      console.log('Mounted...');
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

<p>text: {text}</p>
<p>text from server: {data.message}</p>

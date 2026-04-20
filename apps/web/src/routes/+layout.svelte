<script lang='ts'>
  import './layout.css';

  import { ModeWatcher } from 'mode-watcher';

  import { Toaster } from '~/components/ui/sonner';
  import { TooltipProvider } from '~/components/ui/tooltip';

  const { children } = $props();
</script>

<ModeWatcher />

<Toaster position='top-right' />

<TooltipProvider>
  {@render children()}
</TooltipProvider>

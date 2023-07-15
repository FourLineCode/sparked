<script lang="ts">
  import { cn } from '$lib/cn';

  export let visible: boolean = true;
  export let label: string;
  export let className: string = '';
</script>

{#if visible}
  <div
    class={cn(
      'w-32 text-center px-4 py-1 font-bold bg-white border-2 border-green-600 rounded-full',
      className
    )}
  >
    {label}
  </div>
{/if}

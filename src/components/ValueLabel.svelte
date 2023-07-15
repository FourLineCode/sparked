<script lang="ts">
  import { cn } from '$lib/cn';

  export let visible: boolean = true;
  export let label: string;
  export let className: string = '';
</script>

{#if visible}
  <div
    class={cn(
      'w-32 flex text-sm items-center justify-center transform px-4 py-2 font-bold bg-white border-2 border-gray-900 rounded-full',
      className
    )}
  >
    {label}
  </div>
{/if}

<script lang="ts">
  import { cn } from '$lib/cn';

  export let visible: boolean = true;
  export let label: string;
  export let value: string;
  export let className: string = '';
</script>

{#if visible}
  <div class="transform scale-50 lg:scale-100">
    <p class="text-xs font-bold text-center text-white rounded-full drop-shadow-md bg-black/30">
      {label}
    </p>
    <div
      class={cn(
        'w-32 text-center px-4 py-1 font-bold bg-white border-2 border-green-600 rounded-full',
        className
      )}
    >
      {value}
    </div>
  </div>
{/if}

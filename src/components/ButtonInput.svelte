<script lang="ts">
  export let visible: boolean = true;
  export let label: string;
  export let onIncrement: () => void;
  export let onDecrement: () => void;
</script>

{#if visible}
  <div
    class="flex items-center justify-center overflow-hidden text-xs font-bold transform bg-white border-2 border-gray-100 rounded-full"
  >
    <button class="flex-1 h-full px-1 text-xl text-white bg-gray-900" on:click={onDecrement}>
      -
    </button>
    <span class="flex-1 w-20 p-1">{label}</span>
    <button class="flex-1 h-full px-1 text-xl text-white bg-gray-900" on:click={onIncrement}>
      +
    </button>
  </div>
{/if}

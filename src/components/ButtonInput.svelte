<script lang="ts">
  export let visible: boolean = true;
  export let label: string;
  export let value: string;
  export let onIncrement: () => void;
  export let onDecrement: () => void;
</script>

{#if visible}
  <p class="text-xs font-bold text-center text-white rounded-full drop-shadow-md bg-black/30">
    {label}
  </p>
  <div
    class="grid grid-cols-7 w-[150px] overflow-hidden text-sm font-bold bg-white border-2 border-white rounded-full"
  >
    <button
      on:click={onDecrement}
      class="flex items-center justify-center col-span-2 px-1 text-xl text-white bg-red-600 active:bg-red-700"
    >
      <svg
        class="w-[16px] h-[16px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 2"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h16"
        />
      </svg>
    </button>
    <span class="col-span-3 p-1 text-center">{value}</span>
    <button
      on:click={onIncrement}
      class="flex items-center justify-center col-span-2 px-1 text-xl text-white bg-green-600 active:bg-green-700"
    >
      <svg
        class="w-[16px] h-[16px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </button>
  </div>
{/if}

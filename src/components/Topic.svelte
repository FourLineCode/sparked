<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';

  export let onClick: (id: number) => void;
  export let id: number;
  export let active: number | null;
  export let description: string;
  export let path: string;
  export let name: string;

  function gotoPath() {
    goto(path);
  }
</script>

<button
  on:click={() => onClick(id)}
  class="w-full p-4 overflow-hidden transition-colors border-2 border-gray-800 rounded-xl hover:bg-gray-100"
>
  <div class="flex items-center gap-4">
    <slot name="icon" />
    <h2 class="text-xl font-semibold">{name}</h2>
  </div>
  {#if active === id}
    <div in:slide out:slide class="mt-2 space-y-4">
      <div class="text-sm text-left">{description}</div>
      <Button on:click={gotoPath} color="green" fullSize radius="md">
        <svg
          slot="leftIcon"
          fill="white"
          aria-hidden="true"
          viewBox="0 0 14 16"
          class="w-[20px] h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
          />
        </svg>
        <span>Start lesson</span>
      </Button>
    </div>
  {/if}
</button>

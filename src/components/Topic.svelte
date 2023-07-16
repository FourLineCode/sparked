<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import PlayIcon from './PlayIcon.svelte';

  export let id: number;
  export let active: number | null;
  export let path: string;
  export let name: string;
  export let description: string;
  export let onClick: (id: number) => void;

  function gotoPath() {
    goto(path);
  }
</script>

<button
  on:click={() => onClick(id)}
  class="w-full p-4 overflow-hidden transition-colors border-2 border-gray-800 rounded-xl hover:bg-gray-100"
>
  <div class="flex items-center gap-4">
    <svg
      class="w-[21px] h-[21px] text-green-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path
        d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z"
      />
    </svg>
    <h2 class="text-xl font-semibold">{name}</h2>
  </div>
  {#if active === id}
    <div in:slide out:slide class="mt-2 space-y-4">
      <div class="text-sm text-left">{description}</div>
      <Button on:click={gotoPath} color="green" fullSize radius="md">
        <PlayIcon slot="leftIcon" />
        <span>Start lesson</span>
      </Button>
    </div>
  {/if}
</button>

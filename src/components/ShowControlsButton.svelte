<script lang="ts">
  export let show: boolean;
  export let onClick: () => void;
</script>

<div class="absolute z-50 top-5 left-5">
  <button
    on:click={onClick}
    class:bg-green-500={show}
    class="p-1.5 transition-colors border-2 border-white rounded-md"
  >
    <svg
      fill="white"
      aria-hidden="true"
      viewBox="0 0 20 20"
      class="w-[20px] h-[20px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z"
      />
    </svg>
  </button>
</div>

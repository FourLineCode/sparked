<script lang="ts">
  import '../app.css';

  import { getStores } from '$app/stores';
  import { SvelteUIProvider } from '@svelteuidev/core';
  const { page } = getStores();
</script>

<SvelteUIProvider themeObserver="light">
  {#if $page.url.pathname.endsWith('/sim')}
    <slot />
  {:else}
    <main class="w-full max-w-[100vw] h-full max-h-[100vh]">
      <nav
        class="sticky flex items-center justify-center w-full p-4 text-gray-200 bg-gray-800 shadow-lg"
      >
        <div class="flex items-center justify-center w-full max-w-3xl gap-2 mx-4">
          <img src="/favicon.png" alt="favicon" class="object-cover w-6 aspect-square" />
          <a
            href="/"
            class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7aba] to-[#00a3ee]"
            >Sparked</a
          >
        </div>
      </nav>
      <div class="max-w-3xl p-4 pb-20 mx-auto">
        <slot />
      </div>
    </main>
  {/if}
</SvelteUIProvider>

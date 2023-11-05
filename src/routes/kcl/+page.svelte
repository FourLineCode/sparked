<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import Formula from '../../components/Formula.svelte';
  import PlayIcon from '../../components/PlayIcon.svelte';

  let step = 1;
  let selected: string | null = null;
  let win: boolean | null = null;

  function goNext() {
    step += 1;
  }

  function gotoSimulation() {
    goto('/kirchhoff/sim');
  }

  function onGuess(answer: string) {
    if (answer === '3') {
      win = true;
    } else {
      win = false;
    }
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Kirchhoff's Current Law</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Kirchhoff's Current Law (KCL) is one of the fundamental principles in electrical circuits. It states that
      the total current entering a junction in an electrical circuit is equal to the total current leaving the
      junction. In other words, the sum of currents at any node in an electrical circuit is zero.
    </p>
    <br />
    <p>
      KCL is essential for analyzing complex electrical circuits and is used to determine unknown currents
      at various points within a circuit.
    </p>
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Formula</h2>
    <p>
      Mathematically, Kirchhoff's Current Law can be expressed as follows:
    </p>
    <Formula>ΣI = 0</Formula>
    <p>
      Where ΣI represents the sum of currents at a junction or node, and it should always equal zero according
      to KCL.
    </p>
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Quiz</h2>
    <p>
      Test your knowledge with the following question:
    </p>
    <p>Consider a simple electrical circuit with three branches and a junction point. If the currents entering the
      junction are:</p>
    <ul>
      <li>Branch A: 2 A</li>
      <li>Branch B: 3 A</li>
    </ul>
    <p>
      What is the current leaving the junction in branch C?
    </p>
    <div class="my-1 font-bold">
      {#if win === true}
        <p class="text-green-500">Correct!</p>
      {:else if win === false}
        <p class="text-red-500">Incorrect!</p>
      {/if}
    </div>
    <div class="space-x-3">
      <input
        id="2"
        value="2"
        type="radio"
        name="answer"
        on:change={() => onGuess('2')}
      />
      <label for="2">2 A</label>
    </div>
    <div class="space-x-3">
      <input
        id="3"
        value="3"
        type="radio"
        name="answer"
        on:change={() => onGuess('3')}
      />
      <label for="3">3 A</label>
    </div>
    <div class="space-x-3">
      <input
        id="5"
        value="5"
        type="radio"
        name="answer"
        on:change={() => onGuess('5')}
      />
      <label for="5">5 A</label>
    </div>
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualization</h2>
    <p class="mb-2">
      You can visualize the application of Kirchhoff's Current Law in a circuit simulation. Start by clicking the
      button below.
    </p>
    <br />
    <Button
      fullSize
      radius="md"
      on:click={gotoSimulation}
      variant="gradient"
      gradient={{ from: 'green', to: 'blue', deg: 90 }}
    >
      <PlayIcon slot="leftIcon" />
      <span>Start simulation</span>
    </Button>
  </div>
{/if}

{#if step < 4}
  <Button
    on:click={goNext}
    fullSize
    radius="md"
    variant="gradient"
    gradient={{ from: 'grape', to: 'blue', deg: 90 }}>Next</Button
  >
{/if}

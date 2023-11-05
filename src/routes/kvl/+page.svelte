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
    goto('/kvl/sim');
  }

  function onGuess(answer: string) {
    if (answer === '4') {
      win = true;
    } else {
      win = false;
    }
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Kirchhoff's Voltage Law (KVL)</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Kirchhoff's Voltage Law (KVL) is another fundamental principle in electrical circuits. It states that the
      total voltage around a closed loop in an electrical circuit is equal to zero. In other words, the sum of
      voltages in a closed loop must balance out.
    </p>
    <br />
    <p>
      KVL is used to analyze the voltage distribution in circuits and is essential for understanding how
      voltage sources, resistors, and other components affect each other in a closed loop.
    </p>
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Formula</h2>
    <p>
      Mathematically, Kirchhoff's Voltage Law can be expressed as follows:
    </p>
    <Formula>ΣV = 0</Formula>
    <p>
      Where ΣV represents the sum of voltages around a closed loop, and it should always equal zero according to
      KVL.
    </p>
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Example</h2>
    <p>
      Consider a simple electrical circuit with two resistors connected in series. The voltage across the first
      resistor is 3 V, and the voltage across the second resistor is 2 V. What is the total voltage across the
      loop?
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
        id="5"
        value="5"
        type="radio"
        name="answer"
        on:change={() => onGuess('5')}
      />
      <label for="5">5 V</label>
    </div>
    <div class="space-x-3">
      <input
        id="3"
        value="3"
        type="radio"
        name="answer"
        on:change={() => onGuess('3')}
      />
      <label for="3">3 V</label>
    </div>
    <div class="space-x-3">
      <input
        id="4"
        value="4"
        type="radio"
        name="answer"
        on:change={() => onGuess('4')}
      />
      <label for="4">4 V</label>
    </div>
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualization</h2>
    <p class="mb-2">
      You can visualize the application of Kirchhoff's Voltage Law in a circuit simulation. Start by clicking the
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

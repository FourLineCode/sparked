<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import Formula from '../../components/Formula.svelte';
  import PlayIcon from '../../components/PlayIcon.svelte';
  import Var from '../../components/Var.svelte';

  let step = 1;
  let selected: string | null = null;
  let win: boolean | null = null;

  function goNext() {
    step += 1;
  }

  function gotoSimulation() {
    goto('/ohms/sim');
  }

  function onGuess() {
    if (selected === '0.5') {
      win = true;
    } else {
      win = false;
    }
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Ohm's Law</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Ohm’s law describes the relationship between <b>current</b> in and{' '}
      <b>potential difference</b> across <b>conductors</b>. The law was developed by physicist{' '}
      <b>Georg Ohm</b>, who found that for many types of conductors the current in them was{' '}
      <b>directly proportional</b> to the potential difference across them.
    </p>
    <br />
    <p>
      Ohm eventually identified a mathematical relationship between current, resistance, and
      potential difference for a conductor.
    </p>
    <br />
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Formula</h2>
    <p>
      If <Var>I</Var> is the current in a conductor in an electrical circuit, <Var>V</Var> is the potential
      difference across the conductor, and <Var>R</Var> is the conductor’s resistance to charge flow,
      then
    </p>
    <Formula>V = I &#215; R</Formula>
    <p>
      In this expression, the standard unit of potential difference is volts (V), the unit of
      current is amperes (A), and the unit of resistance is ohms (Ω).
    </p>
    <br />
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Example</h2>
    <p>
      A 10 Ω resistor in a circuit has a potential difference of 5 V across it. What is the current
      through the resistor?
    </p>
    <div class="flex items-center justify-center">
      <img src="/images/circuit.svg" alt="circuit" class="w-full h-auto" />
    </div>
    <br />
    <h2 class="text-xl font-bold">Answer</h2>
    <p>Choose an answer:</p>
    <div class="pl-10 mb-2">
      <div class="space-x-3">
        <input
          id="5"
          value="5"
          type="radio"
          name="answer"
          checked={selected === '5'}
          on:change={(e) => (selected = e.currentTarget.value)}
        />
        <label for="5">5 A</label>
      </div>
      <div class="space-x-3">
        <input
          id="0.5"
          value="0.5"
          type="radio"
          name="answer"
          checked={selected === '0.5'}
          on:change={(e) => (selected = e.currentTarget.value)}
        />
        <label for="0.5">0.5 A</label>
      </div>
      <div class="space-x-3">
        <input
          id="0.25"
          value="0.25"
          type="radio"
          name="answer"
          checked={selected === '0.25'}
          on:change={(e) => (selected = e.currentTarget.value)}
        />
        <label for="0.25">0.25 A</label>
      </div>
      <div class="my-1 font-bold">
        {#if win}
          <p class="text-green-500">Correct!</p>
        {:else if win === false}
          <p class="text-red-500">Incorrect!</p>
        {/if}
      </div>
    </div>
    {#if win !== true}
      <Button
        on:click={onGuess}
        disabled={!selected}
        fullSize
        radius="md"
        variant="gradient"
        gradient={{ from: 'violet', to: 'green', deg: 90 }}
      >
        Submit
      </Button>
    {/if}
    <br />
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualize</h2>
    <p class="mb-2">
      You can visualize a physical representation of Ohm's Law circuit in 3D. Start by clicking the
      button below.
    </p>
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

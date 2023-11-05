<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';

  let step = 1;

  function goNext() {
    step += 1;
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Thevenin's Theorem</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Thevenin's Theorem is a fundamental principle in electrical engineering that simplifies complex electrical
      circuits to a more manageable form. It allows you to represent any linear electrical network with a single
      voltage source and a single series resistor.
    </p>
    <br />
    <p>
      The theorem states that any two-terminal linear circuit can be replaced by an equivalent circuit consisting
      of a voltage source (Thevenin voltage) in series with a single resistor (Thevenin resistance).
    </p>
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Thevenin's Equivalent Circuit</h2>
    <p>
      The Thevenin equivalent circuit consists of two main components:
    </p>
    <ul>
      <li>Thevenin Voltage (Vth) - The open-circuit voltage at the terminals of the circuit being analyzed.</li>
      <li>Thevenin Resistance (Rth) - The equivalent resistance when all independent voltage sources are turned off
        and all independent current sources are replaced by open circuits.
      </li>
    </ul>
    <p>
      This simplified representation is extremely useful for analyzing complex circuits and understanding how they
      behave under different conditions.
    </p>
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Example</h2>
    <p>
      Let's consider a practical example. We have a circuit with multiple resistors, voltage sources, and current
      sources. Using Thevenin's Theorem, we can simplify this complex circuit into its Thevenin equivalent.
    </p>
    <!-- Insert a diagram or description of the original circuit -->
    <br />
    <p>
      After analysis, we find that the Thevenin equivalent circuit for this complex network consists of a 10V
      voltage source (Vth) and a 5Ω resistor (Rth).
    </p>
  </div>
{/if}

{#if step < 3}
  <Button
    on:click={goNext}
    fullSize
    radius="md"
    variant="gradient"
    gradient={{ from: 'grape', to: 'blue', deg: 90 }}>Next</Button
  >
{/if}

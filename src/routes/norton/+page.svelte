<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';

  let step = 1;

  function goNext() {
    step += 1;
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Norton's Theorem</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Norton's Theorem is a fundamental principle in electrical engineering that simplifies complex electrical
      circuits to a more manageable form, just like Thevenin's Theorem. It allows you to represent any linear
      electrical network with a single current source and a single parallel resistor.
    </p>
    <br />
    <p>
      The theorem states that any two-terminal linear circuit can be replaced by an equivalent circuit consisting
      of a current source (Norton current) in parallel with a single resistor (Norton resistance).
    </p>
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Norton's Equivalent Circuit</h2>
    <p>
      The Norton equivalent circuit consists of two main components:
    </p>
    <ul>
      <li>Norton Current (In) - The short-circuit current at the terminals of the circuit being analyzed.</li>
      <li>Norton Resistance (Rn) - The equivalent resistance when all independent voltage sources are turned off
        and all independent current sources are replaced by short circuits.
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
      sources. Using Norton's Theorem, we can simplify this complex circuit into its Norton equivalent.
    </p>
    <!-- Insert a diagram or description of the original circuit -->
    <br />
    <p>
      After analysis, we find that the Norton equivalent circuit for this complex network consists of a 4A current
      source (In) and a 2Ω resistor (Rn).
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

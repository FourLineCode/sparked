<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import Formula from '../../components/Formula.svelte';
  import PlayIcon from '../../components/PlayIcon.svelte';

  let step = 1;
  function goNext() {
    step += 1;
  }

  function gotoSimulation() {
    goto('/mesh/sim');
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Mesh current analysis</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Mesh Current Analysis is a technique used to find the currents circulating around a loop or
      mesh with in any closed path of a circuit.
    </p>
    <br />
    <p>
      As with any circuit analysis challenge, we have to solve a system of 2E independent equations,
      where E is the number of circuit elements. The Mesh Current Method efficiently manages the
      analysis task, resulting in a relatively small number of equations to solve. The Mesh Current
      Method is based on Kirchhoff's Voltage Law (KVL).
    </p>
    <br />
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <p>The Mesh Current Method uses two special terms: loop and mesh.</p>
    <img src="/images/mesh.svg" alt="mesh" class="w-full h-auto" />
    <br />
    <p>
      A loop is any closed path around a circuit. To trace a loop, you start at any component
      terminal, and trace a path through connected elements until you get back to the starting
      point. A loop is allowed to go through an element just one time. In the circuit above, there
      are three loops, two solid loops, I and II, and one dashed loop III, all the way around the
      outside.
    </p>
    <br />
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <p>
      Our circuit has two meshes. We identify two loop currents and call them i1 and i2. These are
      going to be our independent variables. Important: the loop current directions are the same,
      both flow in a clockwise direction.
    </p>
    <img src="/images/mesh2.svg" alt="mesh2" class="w-full h-auto" />
    <p>
      By defining a loop current in every mesh, you will have enough independent equations to solve
      the circuit.
    </p>
    <br />
    <p>Applying KVL we get the following equations:</p>
    <br />
    <Formula>
      mesh 1: +5v - 2000 i1 - 1000 (i1 - i2) = 0
      <br />
      mesh 2: -1000 (i1 - i2) - 2000 i2 - 2V = 0
    </Formula>
    <br />
    <p>Solving both equations we get following values for the mesh currents:</p>
    <Formula>
      i1 = +1.625 mA
      <br />
      i2 = -0.125 mA
    </Formula>
    <br />
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualize</h2>
    <p>
      You can visualize a physical representation of Mesh current analysis in 3D. Start by clicking
      the button below.
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

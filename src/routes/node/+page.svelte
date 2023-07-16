<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import PlayIcon from '../../components/PlayIcon.svelte';
  import Var from '../../components/Var.svelte';

  let step = 1;
  function goNext() {
    step += 1;
  }

  function gotoSimulation() {
    goto('/node/sim');
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Nodal analysis</h1>

{#if step >= 1}
  <div in:slide out:slide>
    <p>
      Nodal Analysis is a technique used to calculating the voltage distribution between the circuit
      nodes.
    </p>
    <br />
    <p>
      Up to now, we've talked about the element voltage that appears across the terminals of a
      single element (also called a branch voltage). When we use the term node voltage, we are
      referring to the potential difference between two nodes of a circuit.
    </p>
    <br />
    <img src="/images/node1.svg" alt="node1" class="w-full h-auto" />
    <br />
    <p>
      We select one of the nodes in our circuit to be the reference node. All the other node
      voltages are measured with respect to this one reference node. If node <Var>c</Var> is assigned
      as the reference node, we establish two node voltages at nodes <Var>a</Var> and <Var>b</Var>.
    </p>
    <br />
  </div>
{/if}

{#if step >= 2}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Method</h2>
    <p>The Node Voltage Method breaks down circuit analysis into this sequence of steps,</p>
    <ul class="pl-4 list-disc">
      <li>Assign a reference node (ground).</li>
      <li>Assign node voltage names to the remaining nodes.</li>
      <li>
        Solve the easy nodes first, the ones with a voltage source connected to the reference node.
      </li>
      <li>Write Kirchhoff's Current Law for each node. Do Ohm's Law in your head.</li>
      <li>Solve the resulting system of equations for all node voltages.</li>
      <li>Solve for any currents you want to know using Ohm's Law.</li>
    </ul>
    <br />
  </div>
{/if}

{#if step >= 3}
  <div in:slide out:slide>
    <!-- <p>
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
      i1 = -0.125 mA
      <br />
      i2 = +1.625 mA
    </Formula>
    <br /> -->
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualize</h2>
    <p>
      You can visualize a physical representation of Nodal analysis in 3D. Start by clicking the
      button below.
    </p>
    <Button color="green" fullSize radius="md" on:click={gotoSimulation}>
      <PlayIcon slot="leftIcon" />
      <span>Start simulation</span>
    </Button>
  </div>
{/if}

{#if step < 4}
  <Button on:click={goNext} color="green" fullSize radius="md">Next</Button>
{/if}

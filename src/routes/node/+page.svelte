<script lang="ts">
  import { goto } from '$app/navigation';
  import { Button } from '@svelteuidev/core';
  import { slide } from 'svelte/transition';
  import Formula from '../../components/Formula.svelte';
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
    <p>
      Our example circuit has three nodes, <Var>a</Var>, <Var>b</Var>, and <Var>c</Var>, so <Var
        >N = 3</Var
      >. Node <Var>c</Var> has a lot of connections, 4, and it connects directly to both sources. This
      makes it a good candidate to play the role of reference node. Node <Var>c</Var> has been marked
      with the ground symbol to let everyone know our choice for reference node.
    </p>
    <img src="/images/node2.svg" alt="mesh2" class="w-full h-auto" />
    <p>
      We can express the voltage across the <Var>20 Ω</Var> resistor as the difference between the two
      node voltages. This can be done two ways, with either <Var>Va</Var> or <Var>Vb</Var> in the first
      position in the voltage difference equation. The first term in the equation is the one we consider
      the more positive of the two. Since we use the sign convention for passive components, the choice
      we make for voltage polarity determines the direction of the current arrow. The current arrow points
      into the positive sign on the resistor voltage.
    </p>
    <br />
    <img src="/images/node3.svg" alt="mesh2" class="w-full h-auto" />
    <br />
    <p>
      The voltage <Var>Va</Var> is easy to figure out. Node <Var>a</Var> connects to a voltage source
      that connects to reference node <Var>c</Var>. That makes it an easy node. The voltage at node <Var
        >a</Var
      > is <Var>Va = 140V</Var>.
    </p>
    <br />
  </div>
{/if}

{#if step >= 4}
  <div in:slide out:slide>
    <p>
      Our system of equations happens to be just one equation. Let's solve it to find the node
      voltage.
    </p>
    <br />
    <Formula>7 - Vb/20 - Vb/6 - Vb/5 = -18</Formula>
    <Formula>- Vb/20 - Vb/6 - Vb/5 = -25</Formula>
    <Formula>(- 25/60) Vb = -25</Formula>
    <Formula>Vb = -25 (-60/25)</Formula>
    <Formula>Vb = 60 V</Formula>
    <br />
  </div>
{/if}

{#if step >= 5}
  <div in:slide out:slide>
    <h2 class="text-xl font-bold">Visualize</h2>
    <p>
      You can visualize a physical representation of Nodal analysis in 3D. Start by clicking the
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

{#if step < 5}
  <Button
    on:click={goNext}
    fullSize
    radius="md"
    variant="gradient"
    gradient={{ from: 'grape', to: 'blue', deg: 90 }}>Next</Button
  >
{/if}

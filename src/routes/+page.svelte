<script lang="ts">
  import Topic from '../components/Topic.svelte';

  let active: number | null = null;

  function onActiveChange(id: number) {
    active = active === id ? null : id;
  }
</script>

<h1 class="mb-3 text-2xl font-bold text-center">Browse Topics</h1>
<div class="space-y-4">
  <Topic
    id={1}
    {active}
    name={"Ohm's Law"}
    path="/ohms"
    description="Ohm’s law states the relationship between electric current and potential difference"
    onClick={onActiveChange}
  />
  <Topic
    id={2}
    {active}
    name={'Mesh current analysis'}
    path="/mesh"
    description="Mesh current analysis is a method by which the current flowing through a planar circuit is calculated"
    onClick={onActiveChange}
  />
  <Topic
    id={3}
    {active}
    name={'Nodal analysis'}
    path="/node"
    description="The mathematical method for calculating the voltage distribution between the circuit nodes"
    onClick={onActiveChange}
  />
</div>

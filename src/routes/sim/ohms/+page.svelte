<script lang="ts">
  import { createCssObject } from '$lib/create-css-object';
  import { setupScene } from '$lib/setup-scene';
  import { onMount } from 'svelte';
  import ButtonInput from '../../../components/ButtonInput.svelte';
  import ValueLabel from '../../../components/ValueLabel.svelte';

  let controls = false;
  function toggleControls() {
    controls = !controls;
  }

  let values = { voltage: 0, current: 0, resistance: 0 };
  const annotations: Record<keyof typeof values, ValueLabel | ButtonInput | null> = {
    voltage: null,
    current: null,
    resistance: null,
  };

  onMount(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const { scene, loader, destroyScene } = setupScene(canvas);

    loader.load('/models/ohms.glb', (gltf) => {
      gltf.scene.traverse((child) => {
        if (Object.keys(values).includes(child.name)) {
          const prop = child.name as keyof typeof values;
          const object = createCssObject(child.position.x, child.position.y, child.position.z);

          let svelteComponent: ValueLabel | ButtonInput | null = null;
          if (prop === 'current') {
            svelteComponent = new ValueLabel({
              target: object.element,
              props: { label: '' },
            });
          } else if (prop === 'resistance' || prop === 'voltage') {
            svelteComponent = new ButtonInput({
              target: object.element,
              props: {
                label: '',
                onIncrement: () => (values = { ...values, [prop]: values[prop] + 1 }),
                onDecrement: () => (values = { ...values, [prop]: values[prop] - 1 }),
              },
            });
          }

          annotations[prop] = svelteComponent;
          scene.add(object);
        }
      });

      scene.add(gltf.scene);
    });

    return destroyScene;
  });

  $: values = { ...values, current: values.voltage / values.resistance };

  $: for (const [key, element] of Object.entries(annotations)) {
    if (key === 'current') {
      element?.$set({
        label: values.resistance === 0 ? '♾️' : `${values[key].toFixed(2).replace(/\.00/g, '')} A`,
      });
    } else if (key === 'resistance' || key === 'voltage') {
      element?.$set({ label: values[key] + (key === 'voltage' ? ' V' : ' Ω') });
    }
  }

  $: Object.values(annotations).forEach((annotation) => annotation?.$set({ visible: controls }));
</script>

<main class="relative w-screen h-screen">
  <div class="absolute z-50 top-5 left-5">
    <button
      on:click={toggleControls}
      class:bg-green-300={controls}
      class="p-1 transition-colors border-2 border-black rounded-md"
    >
      <svg
        fill="black"
        aria-hidden="true"
        viewBox="0 0 20 20"
        class="w-[23px] h-[23px] text-gray-800 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z"
        />
      </svg>
    </button>
  </div>
  <canvas id="canvas" class="block w-full h-full" />
</main>

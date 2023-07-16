<script lang="ts">
  import { createCssObject, setupScene } from '$lib/three-utils';
  import { onMount } from 'svelte';
  import ButtonInput from '../../../components/ButtonInput.svelte';
  import ShowControlsButton from '../../../components/ShowControlsButton.svelte';
  import ValueLabel from '../../../components/ValueLabel.svelte';

  let controls = false;
  function toggleControls() {
    controls = !controls;
  }

  let values = {
    voltage1: 0,
    voltage2: 0,
    current1: 0,
    current2: 0,
    resistance1: 0,
    resistance2: 0,
    resistance3: 0,
  };
  const annotations: Record<keyof typeof values, ValueLabel | ButtonInput | null> = {
    voltage1: null,
    voltage2: null,
    current1: null,
    current2: null,
    resistance1: null,
    resistance2: null,
    resistance3: null,
  };

  onMount(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const { scene, loader, destroyScene } = setupScene(canvas);

    loader.load('/models/mesh.glb', (gltf) => {
      gltf.scene.traverse((child) => {
        if (Object.keys(values).includes(child.name)) {
          const prop = child.name as keyof typeof values;
          const object = createCssObject(child.position.x, child.position.y, child.position.z);

          let svelteComponent: ValueLabel | ButtonInput | null = null;
          if (prop === 'current1' || prop === 'current2') {
            svelteComponent = new ValueLabel({
              target: object.element,
              props: { label: '' },
            });
          } else if (
            prop === 'voltage1' ||
            prop === 'voltage2' ||
            prop === 'resistance1' ||
            prop === 'resistance2' ||
            prop === 'resistance3'
          ) {
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

  $: {
    const { voltage1, voltage2, resistance1, resistance2, resistance3 } = values;
    const i1 =
      (resistance2 * voltage1 + resistance3 * voltage1 - resistance3 * voltage2) /
      (resistance1 * resistance2 + resistance2 * resistance3 + resistance1 * resistance3);
    values.current1 = i1;
    const i2 = (resistance1 * i1 + resistance3 * i1 - voltage1) / resistance3;
    values.current2 = i2;
  }

  $: for (const [key, element] of Object.entries(annotations)) {
    if (key === 'current1' || key === 'current2') {
      element?.$set({
        label: isNaN(values[key]) ? '∞' : `${values[key].toFixed(2)} A`,
      });
    } else if (
      key === 'voltage1' ||
      key === 'voltage2' ||
      key === 'resistance1' ||
      key === 'resistance2' ||
      key === 'resistance3'
    ) {
      element?.$set({ label: values[key] + (key.startsWith('voltage') ? ' V' : ' Ω') });
    }
  }

  $: Object.values(annotations).forEach((annotation) => annotation?.$set({ visible: controls }));
</script>

<main class="relative w-screen h-screen">
  <ShowControlsButton show={controls} onClick={toggleControls} />
  <canvas id="canvas" class="block w-full h-full" />
</main>

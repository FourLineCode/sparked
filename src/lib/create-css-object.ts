import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

export function createCssObject(x: number, y: number, z: number) {
  const el = document.createElement('div');
  el.style.pointerEvents = 'auto';
  const css2DObject = new CSS2DObject(el);
  css2DObject.position.set(x, y, z);

  return css2DObject;
}

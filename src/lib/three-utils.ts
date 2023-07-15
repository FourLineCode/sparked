import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';

export function setupScene(element: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas: element, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const htmlRenderer = new CSS2DRenderer();
  htmlRenderer.setSize(window.innerWidth, window.innerHeight);
  htmlRenderer.domElement.style.position = 'absolute';
  htmlRenderer.domElement.style.top = '0px';
  htmlRenderer.domElement.style.pointerEvents = 'none';
  document.body.appendChild(htmlRenderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x5c5f66);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 2, 3);
  scene.add(camera);

  const pointLight = new THREE.DirectionalLight(0xffffff, 1);
  pointLight.position.set(0, 5, 5);
  scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  const loader = new GLTFLoader();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    htmlRenderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    htmlRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  function destroyScene() {
    renderer.dispose();
    renderer.domElement.remove();
    htmlRenderer.domElement.remove();
  }

  return {
    scene,
    renderer,
    camera,
    controls,
    loader,
    htmlRenderer,
    destroyScene,
  };
}

export function createCssObject(x: number, y: number, z: number) {
  const el = document.createElement('div');
  el.style.pointerEvents = 'auto';
  const css2DObject = new CSS2DObject(el);
  css2DObject.position.set(x, y, z);

  return css2DObject;
}

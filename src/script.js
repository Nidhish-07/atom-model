import "./style.css";
import * as THREE from "three";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object

const group = new THREE.Group();
scene.add(group);

const mesh1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(mesh1);

const mesh2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(mesh2);

const ring1 = new THREE.Mesh(new THREE.RingGeometry(2, 2.05, 50, 1, 0, Math.PI * 2),new THREE.MeshBasicMaterial({color:0x0000ff,side:THREE.DoubleSide}));

group.add(ring1)


const axes = new THREE.AxesHelper(5);
group.add(axes);
// mesh2.position.z=-2
// scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 5;
camera.position.y = 1;
camera.position.z = -5;
// camera.lookAt(mesh1.position);
camera.lookAt(group.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  mesh1.rotation.y = elapsedTime;

  mesh2.rotation.y = Math.sin(elapsedTime);
  mesh2.rotation.x = Math.cos(elapsedTime);
  mesh2.position.y = Math.sin(elapsedTime) * 1.5;
  mesh2.position.x = Math.cos(elapsedTime) * 1;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

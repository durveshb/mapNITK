import * as THREE from "./resources/three.module.js";

import { OrbitControls } from "./resources/OrbitControls.js";

var camera, controls, scene, renderer;

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcccccc);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.0005);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 500, 0);

  // controls

  controls = new OrbitControls(camera, renderer.domElement);

  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 100;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;

  // world

  const geometry = new THREE.BoxGeometry(30, 30, 30);
  const material = new THREE.MeshBasicMaterial({ color: "gray" });

  // main building
  const mainBuilding = new THREE.Mesh(geometry, material);
  mainBuilding.scale.set(1, 1, 3);
  mainBuilding.position.y = 15;
  scene.add(mainBuilding);

  const mainBuilding2 = new THREE.Mesh(geometry, material);
  mainBuilding2.scale.set(1, 1, 1.5);
  mainBuilding2.position.set(-20, 15, -60);
  scene.add(mainBuilding2);

  const mainBuilding3 = new THREE.Mesh(geometry, material);
  mainBuilding3.scale.set(1.5, 1, 0.7);
  mainBuilding3.position.set(-12.5, 15, -85);
  scene.add(mainBuilding3);

  // library
  const library = new THREE.Mesh(geometry, material);
  library.scale.set(1.3, 1, 0.7);
  library.position.set(25, 15, -85);
  scene.add(library);

  // atb
  const atb = new THREE.Mesh(geometry, material);
  atb.scale.set(1.6, 1, 0.7);
  atb.position.set(70, 15, -130);
  scene.add(atb);

  const atb2 = new THREE.Mesh(geometry, material);
  atb2.scale.set(1, 1, 1.5);
  atb2.position.set(79, 15, -150);
  scene.add(atb2);

  // maths
  const maths = new THREE.Mesh(geometry, material);
  maths.scale.set(1.2, 0.6, 0.5);
  maths.position.set(20, 9, -130);
  scene.add(maths);

  scene.add(new THREE.GridHelper(200));
  scene.add(new THREE.AxesHelper(500));
  // lights

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  var light = new THREE.DirectionalLight(0x002288);
  light.position.set(-1, -1, -1);
  scene.add(light);

  var light = new THREE.AmbientLight(0x222222);
  scene.add(light);

  //

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  render();
}

function render() {
  renderer.render(scene, camera);
}

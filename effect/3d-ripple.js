document.addEventListener("DOMContentLoaded", function () {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const container = document.querySelector('.anim');

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  renderer.setClearColor(0x000000, 0);  // Black background

  camera.position.set(0,20, 0);  // Position the camera above the scene
  camera.lookAt(0, 0, 0);  // Look at the center of the scene

  const textureLoader = new THREE.TextureLoader();
  const circleImg = 'assets/circle.png';  // Relative path to your image
  const imgTex = textureLoader.load(circleImg);

  const count = 100;
  const sep = 3;
  const positions = [];
  const bufferGeometry = new THREE.BufferGeometry();


  let t = 0;
  const f = 0.002;
  const a = 3;

  function graph(x, z) {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }

  for (let xi = 0; xi < count; xi++) {
    for (let zi = 0; zi < count; zi++) {
      const x = sep * (xi - count / 2);
      const z = sep * (zi - count / 2);
      const y = graph(x, z);
      positions.push(x, y, z);
    }
  }

  bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    map: imgTex,
    color: 'red',
    size: 0.5,
    sizeAttenuation: true,
    transparent: false,
    alphaTest: 0.5,
    opacity: 1.0
  });

  const points = new THREE.Points(bufferGeometry, pointsMaterial);
  scene.add(points);

  // Rotate the camera to get a vertical view
  camera.rotation.x = -Math.PI / 2;

  function animate() {
    requestAnimationFrame(animate);

    t += 15;
    const positionsArray = bufferGeometry.attributes.position.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);

        positionsArray[i + 1] = graph(x, z);  // Update the y value for the vertical animation
        i += 3;
      }
    }

    bufferGeometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
});

import { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';

function App() {
  let direction = 1;
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    let loadedModel;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./assets/shiba/lopoly_dna.gltf', (gltfScene) => {
      loadedModel = gltfScene;

      // Position and scale adjustments
      gltfScene.scene.position.set(1, 3, 0);
      gltfScene.scene.scale.set(0.5, 0.5, 0.5);
      test.scene.add(gltfScene.scene);
    });

    let direction = 1; // 1 for increasing, -1 for decreasing

    const animate = () => {
      if (loadedModel) {
        // Adjust rotation based on direction
        loadedModel.scene.rotation.x += direction * 0.01;

        // Switch direction at boundaries
        if (loadedModel.scene.rotation.x >= 0.5) {
          direction = -1; // Switch to decreasing
        } else if (loadedModel.scene.rotation.x <= 0) {
          direction = 1; // Switch to increasing
        }

        loadedModel.scene.rotation.y = 0;
        loadedModel.scene.rotation.z = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { extend, useLoader, useFrame } from '@react-three/fiber';
import { Water } from 'three-stdlib';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';

extend({ Water });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: React.DetailedHTMLProps<React.HTMLAttributes<THREE.Mesh>, THREE.Mesh>;
    }
  }
}

const GeoOcean = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const noise = new SimplexNoise();

  useFrame((_state, delta) => {
    const material = meshRef.current.material as THREE.ShaderMaterial;
    if (material.uniforms) {
      material.uniforms.time.value += delta;
    }
    const positions = (
      meshRef.current.geometry.attributes.position as THREE.BufferAttribute
    ).array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      positions[i + 2] = noise.noise3d(x * 0.005, y * 0.005, z * 0.01) * 15;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geometry = useMemo(() => new THREE.PlaneGeometry(2048, 2048, 512, 512), []);
  const config = useMemo(
    () => ({
      textureWidth: 2048,
      textureHeight: 2048,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 5.0,
      fog: true,
      // format: gl.encoding
    }),
    [waterNormals]
  );
  return (
    // <water ref={meshRef} args={[geometry, config]} rotation-x={-Math.PI / 2} />
    <primitive
      object={new Water(geometry, config)}
      ref={meshRef}
      rotation-x={-Math.PI / 2}
    />
  );
};

export default GeoOcean;

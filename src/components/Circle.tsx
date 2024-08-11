import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Circle = () => {
  const ref = useRef({} as THREE.Mesh);

  useFrame((state, delta) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 10;
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta;
  });

  return (
    <mesh ref={ref} scale={20}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="orange"
        roughness={0.5}
        metalness={0}
        clearcoat={0.1}
        clearcoatRoughness={0}
        reflectivity={0.5}
        transmission={1}
        ior={1.5}
        thickness={100}
        attenuationDistance={500}
        attenuationColor={'#ffffff'}
        envMapIntensity={0.5}
      />
    </mesh>
  );
};

export default Circle;

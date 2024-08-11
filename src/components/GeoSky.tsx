import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const GeoSky = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      '/skyboxsun25-px.jpg',
      '/skyboxsun25-nx.jpg',
      '/skyboxsun25-py.jpg',
      '/skyboxsun25-ny.jpg',
      '/skyboxsun25-pz.jpg',
      '/skyboxsun25-nz.jpg',
    ]);
    scene.background = texture;
    return () => {
      scene.background = null;
    };
  }, [scene]);

  return null;
};

export default GeoSky;

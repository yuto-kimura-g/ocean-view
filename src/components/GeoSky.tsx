import { useCubeTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
// import * as THREE from 'three';

const GeoSky = () => {
  const { scene } = useThree();
  const texture = useCubeTexture(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    {
      path: '/ocean-view/',
    }
  );
  useEffect(() => {
    // const loader = new THREE.CubeTextureLoader();
    // const texture = loader.load([
    //   '/px.jpg',
    //   '/nx.jpg',
    //   '/py.jpg',
    //   '/ny.jpg',
    //   '/pz.jpg',
    //   '/nz.jpg',
    // ]);
    scene.background = texture;
    return () => {
      scene.background = null;
    };
  }, [scene, texture]);
  return null;
};

export default GeoSky;

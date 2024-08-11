import GeoSky from './GeoSky';
import GeoOcean from './GeoOcean';
import TextRing from './TextRing';
// import Circle from './Circle'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GeoEarth = () => {
  return (
    <Canvas
      camera={{ position: [0, 30, 150], fov: 100, near: 1, far: 10000 }}
      gl={{ antialias: true, alpha: false }}
    >
      <pointLight position={[100, 100, -100]} intensity={0.5} />
      {/* <pointLight position={[-100, -100, -100]} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <GeoSky />
      <GeoOcean />
      <TextRing text="Welcome! Enjoy your time here :)     " />
      {/* <Circle /> */}
      {/* <Sky
                sunPosition={[100, 100, -100]}
                turbidity={0.25}
            /> */}
      <OrbitControls
        target={[0, 0, 0]}
        enableDamping={true}
        dampingFactor={0.5}
        maxPolarAngle={Math.PI * 0.45}
        // minPolarAngle={0}
        autoRotate={false}
        // autoRotateSpeed={3}
        minDistance={1}
        maxDistance={128}
      />
    </Canvas>
  );
};

export default GeoEarth;

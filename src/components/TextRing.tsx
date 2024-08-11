import React, { useMemo, useRef, useState } from 'react';
import { Text } from '@react-three/drei';
import { Euler, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TextRing: React.FC<{ text: string }> = ({ text }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [autoRotateActive, setAutoRotateActive] = useState(true);

  const handleTextClick = () => {
    setAutoRotateActive(!autoRotateActive);
  };

  useFrame(() => {
    const delta = 0.005;
    if (groupRef.current && autoRotateActive) {
      groupRef.current.rotation.y += delta;
    }
  });

  const radius = 400;
  const words = text.split('').reverse();
  // wordsをcharsに更に分解
  const nWords = words.length;
  const texts = useMemo(() => {
    const angleStep = (Math.PI * 2) / nWords;
    return words.map((word, i) => {
      const angle = i * angleStep + Math.PI;
      return {
        position: [radius * Math.sin(angle), 100, radius * Math.cos(angle)],
        rotation: [0, angle + Math.PI, 0],
        text: word,
      };
    });
  }, [radius, words, nWords]);

  return (
    <group ref={groupRef}>
      {texts.map(({ position, rotation, text }, index) => (
        <React.Fragment key={index}>
          <Text
            // key={index}
            // font={'/OpenSans_Regular.json'}
            fontWeight={'bold'}
            position={new Vector3(...position)}
            rotation={new Euler(...rotation)}
            fontSize={50}
            // color={'#e17b34'}
            color={'#1e50a2'}
            fillOpacity={0.5}
            onClick={handleTextClick}
          >
            {text}
          </Text>
          {/* Textのクリック判定範囲を広げるためのダミーBox */}
          <mesh
            position={new Vector3(...position)}
            rotation={new Euler(...rotation)}
            onClick={handleTextClick}
            visible={false}
          >
            <boxGeometry args={[150, 150, 1]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

export default TextRing;

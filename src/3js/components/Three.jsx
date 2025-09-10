import React from 'react'
import { angleToRadians } from '../utils/angle'
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import Stul from './Stul';

const Three = () => {


  useFrame((state, delta) => {
    // const t = state.clock.getElapsedTime();
    // console.log('elapsed time: ', t);
    // state.camera.position.x = Math.sin(t / 4) * 8;
    // state.camera.position.z = Math.cos(t / 4) * 8;
    // state.camera.lookAt(0, 0, 0);
    // console.log(Math.tan(delta));
    // console.log("delta value: " . delta);
  });


  return (
    <>

      {/* <Html distanceFactor={10} position={[0, 0, 1]}>
        <div style={{  padding: '5px', borderRadius: '5px', width: '200px', }}>
          I'm floating on a sphere!
        </div>
      </Html> */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      {/* <OrbitControls minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} /> */}

      {/* Ball */}
      {/* <mesh position={[-1, 0.5, 0]} castShadow >
        <sphereGeometry args={[0.5, 38, 38]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh> */}
      <Stul />



      {/* Floor */}
      {/* <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1ea3d8" />
            </mesh> */}

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Spotlight light */}
      <spotLight args={["#ffffff", 1.5, 12, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  )
}

export default Three

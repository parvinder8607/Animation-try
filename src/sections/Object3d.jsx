// 3DModel.js

import React from "react";
import rocket from "../assets/3d/rocket.glb";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

// This component loads a GLTF model
const Model = ({position}) => {
  const { scene } = useGLTF(rocket);

  return (
    <motion.group
      initial={{ rotateY: 0 }}
      animate={{ rotateY: Math.PI * 2 }} // Rotating 360 degrees
      transition={{
        repeat: Infinity,
        duration: 10, // The rotation duration
        ease: "linear",
      }}
      position={position}
      rotateY={'10deg'}
    >
      <primitive object={scene} />
    </motion.group>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={.2} />
      <directionalLight position={[-1500, 300, 1500]} />
      <Model position={[-0.3, 0.2, 4]} />
      {/* <OrbitControls />  */}
    </Canvas>
  );
};

export default Scene;

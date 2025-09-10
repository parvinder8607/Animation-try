import React from 'react'

const Stul = () => {
  return (
    <group>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, .25, 2]} castShadow />
          <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
         </mesh>
         <mesh position={[0, 0.25, 0]}>
            <boxGeometry args={[1.5, 0.5, 1.5]} castShadow />
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0, .75, 0]}>
            <boxGeometry args={[1, 0.5, 1]} castShadow />
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[1, -1, 1]}>
            <cylinderGeometry args={[0.25, 0.25, 2, 15]} castShadow />
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />

        </mesh>
    </group>
  )
}

export default Stul

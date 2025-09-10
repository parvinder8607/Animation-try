import { Html, useScroll } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { angleToRadians } from '../utils/angle'
import { sin } from 'three/tsl'
import { lerp } from 'three/src/math/MathUtils.js'

export default function Scene() {
  const ref = useRef()
  const scroll = useScroll()

  useFrame(() => {
    const offset = scroll.offset;
    const section = Math.floor(offset * 5);

    const positions = [
      [5, 0, 0],
      [0, 0, 0],
      [-5, 0, 0],
    ]

    const target = positions[section]
    if(ref.current) {
      ref.current.position.x = lerp(ref.current.position.x, target[0], 0.05)
      ref.current.position.y = lerp(ref.current.position.y, target[1], 0.05)
      ref.current.position.z = lerp(ref.current.position.z, target[2], 0.05)
    }
    
   
  })

  return (
    <>
      <mesh   ref={ref}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      
    </>
  )
}

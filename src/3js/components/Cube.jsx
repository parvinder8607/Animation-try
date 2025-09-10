// Cube.jsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Cube({ scroll }) {
  const ref = useRef()

  useFrame(() => {
    if (ref.current && scroll.current !== null) {
      // scroll.current goes from 0 to 1
      const r = scroll.current
      ref.current.rotation.x = r * Math.PI * 2
      ref.current.rotation.y = r * Math.PI * 2
      ref.current.position.z = -r * 5
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

// ScrollScene.jsx
import { ScrollControls, useScroll, Html } from '@react-three/drei'
import { useRef } from 'react'
import Cube from './Cube'

export default function ScrollScene() {
  const scroll = useScroll()
  const scrollRef = useRef()

  return (
    <ScrollControls pages={3} damping={0.2}>
      <Cube scroll={scroll} />

      {/* Section 1 */}
      <Html position={[0, 2, 0]}>
        <div className="section">
          <h1>🚀 Welcome</h1>
          <p>This is the first section</p>
        </div>
      </Html>

      {/* Section 2 */}
      <Html position={[0, -3, 0]}>
        <div className="section">
          <h1>💡 Scroll Animations</h1>
          <p>The cube rotates as you scroll!</p>
        </div>
      </Html>

      {/* Section 3 */}
      <Html position={[0, -8, 0]}>
        <div className="section">
          <h1>🎯 Finish</h1>
          <p>Cool, right? Let’s build more.</p>
        </div>
      </Html>
    </ScrollControls>
  )
}

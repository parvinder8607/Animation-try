import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Three from './components/Three'
import { Environment, Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import ScrollScene from './components/ScrollScene'
import Scene from './components/Scene'


function App() {
  return (
    <>
    <Canvas id='three-canvas-container'>


      {/* <Suspense fallback={null}>
          <Three />
        </Suspense> */}
        {/* <gridHelper args={[10, 10]} /> */}
      {/* <axesHelper args={[5]} /> */}




      <ambientLight intensity={0.6} />
      <directionalLight position={[-8, 10, 5]} intensity={1} />


      {/* <ScrollScene /> doesn't work */}


      <ScrollControls pages={5} damping={0.2}>
        <Scene />
        <Scroll html>
        <div className=' relative z-10 w-screen'>
           <section className='h-screen w-full p-16 flex  items-center'>
            <div className="w-full flex flex-col gap-4 lg:w-1/2 ">
              <h1 className='text-6xl font-bold'>Build 3D in React.js</h1>
              <p className='text-lg text-gray-600 '>
                This is a demo of a 3D scene built with React.js and Three.js.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit'> 
                Explore Now
              </button>
            </div>

           </section>
           <section className='h-screen w-full p-16 flex  items-center'>
            <div className="w-full flex flex-col gap-4 lg:w-1/2 ">
              <h1 className='text-6xl font-bold'>Build 3D in React.js</h1>
              <p className='text-lg text-gray-600 '>
                This is a demo of a 3D scene built with React.js and Three.js.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit'> 
                Explore Now
              </button>
            </div>

           </section>
           <section className='h-screen w-full p-16 flex  items-center'>
            <div className="w-full flex flex-col gap-4 lg:w-1/2 ">
              <h1 className='text-6xl font-bold'>Build 3D in React.js</h1>
              <p className='text-lg text-gray-600 '>
                This is a demo of a 3D scene built with React.js and Three.js.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit'> 
                Explore Now
              </button>
            </div>

           </section>
          </div>
        </Scroll>
      </ScrollControls>
      {/* <Environment background near={1} far={1000} resolution={256} preset="sunset" /> */}
      {/* <OrbitControls /> */}
    </Canvas>
    </>
  )
}

export default App
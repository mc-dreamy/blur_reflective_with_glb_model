import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Effects } from './Effects'

export default function App() {
  return (
    <Canvas gl={{ antialias: false, stencil: false }} camera={{ position: [5, 0, 0], fov: 80 }}>
      <ambientLight intensity={6} />
      <spotLight
        angle={0.12}
        penumbra={0.1}
        position={[10, 0, -10]}
        intensity={40}
        onUpdate={(self) => {
          self.target.position.set(-10, 0, 0)
          self.target.updateMatrixWorld()
        }}
      />
    </Canvas>
  )
}
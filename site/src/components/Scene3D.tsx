import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Lightformer, Sparkles } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'

// Étoile à huit branches (deux carrés superposés), avec un cercle évidé au centre.
function useStarGeometry() {
  return useMemo(() => {
    const R = 1.5
    const r = R * Math.cos(Math.PI / 4) / Math.cos(Math.PI / 8)
    const shape = new THREE.Shape()
    for (let i = 0; i < 16; i++) {
      const radius = i % 2 === 0 ? R : r
      const a = (i * Math.PI) / 8 + Math.PI / 2
      const x = Math.cos(a) * radius
      const y = Math.sin(a) * radius
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    const hole = new THREE.Path()
    hole.absarc(0, 0, 0.42, 0, Math.PI * 2, true)
    shape.holes.push(hole)
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 6,
      curveSegments: 48,
    })
    geo.center()
    return geo
  }, [])
}

const gold = new THREE.MeshPhysicalMaterial({
  color: '#d9b56a',
  metalness: 1,
  roughness: 0.2,
  clearcoat: 0.6,
  clearcoatRoughness: 0.25,
})

const goldThin = new THREE.MeshStandardMaterial({ color: '#ead7a8', metalness: 1, roughness: 0.3 })

function Emblem({ still }: { still: boolean }) {
  const group = useRef<THREE.Group>(null)
  const star = useRef<THREE.Mesh>(null)
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const geometry = useStarGeometry()

  useFrame((state, delta) => {
    if (!group.current || !star.current || !ring1.current || !ring2.current) return
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5)
    // L'emblème suit la souris en douceur et pivote quand on fait défiler la page.
    const targetX = still ? 0 : -state.pointer.y * 0.35 + scroll * 0.6
    const targetY = still ? 0 : state.pointer.x * 0.5 + scroll * 1.2
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta)
    if (still) return
    star.current.rotation.z += delta * 0.15
    ring1.current.rotation.z += delta * 0.25
    ring2.current.rotation.z -= delta * 0.18
  })

  return (
    <group ref={group}>
      <Float speed={still ? 0 : 1.6} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh ref={star} geometry={geometry} material={gold} />
        <mesh material={gold}>
          <sphereGeometry args={[0.18, 48, 48]} />
        </mesh>
      </Float>
      <mesh ref={ring1} material={goldThin} rotation={[Math.PI / 2.6, 0.2, 0]}>
        <torusGeometry args={[2.25, 0.012, 16, 160]} />
      </mesh>
      <mesh ref={ring2} material={goldThin} rotation={[-Math.PI / 3, -0.5, 0]}>
        <torusGeometry args={[2.6, 0.008, 16, 160]} />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  const still = useReducedMotion() ?? false
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#fff4dc" />
      <pointLight position={[-4, -2, 2]} intensity={18} color="#2f8f75" />
      <Emblem still={still} />
      <Sparkles count={70} scale={[7, 6, 4]} size={2.6} speed={still ? 0 : 0.35} color="#ead7a8" opacity={0.8} />
      {/* Éclairage studio généré localement : aucune image à télécharger. */}
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 4, -6]} scale={[10, 2, 1]} color="#fff3d6" />
        <Lightformer intensity={2} position={[-5, 0, -2]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} color="#1f5c4d" />
        <Lightformer intensity={2.5} position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} color="#ead7a8" />
        <Lightformer form="ring" intensity={2} position={[0, -3, 3]} scale={3} color="#ffffff" />
      </Environment>
    </Canvas>
  )
}

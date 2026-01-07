import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function RopePhysics() {
  return (
    <div style={{ width: '100%', height: '600px', background: 'transparent', borderRadius: '20px', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Physics debug={false} interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
      </Canvas>
    </div>
  )
}

function Band() {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.6, 0]]) // prettier-ignore

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current) {
      // Calculate catmul curve with more points for smoother rope
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.translation())
      curve.points[2].copy(j1.current.translation())
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(64)) // Increased from 32 for smoother rope
      // Tilt it back towards the screen
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} angularDamping={2} linearDamping={2} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} angularDamping={2} linearDamping={2}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} angularDamping={2} linearDamping={2}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} angularDamping={2} linearDamping={2}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} angularDamping={2} linearDamping={2} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[1.2, 1.6, 0.01]} />
          <mesh
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
          >
            <planeGeometry args={[1.2 * 2, 1.6 * 2]} />
            <meshBasicMaterial transparent opacity={0.95} color="#ffffff" side={THREE.DoubleSide}>
              <canvasTexture attach="map" args={[createCardTexture()]} />
            </meshBasicMaterial>
          </mesh>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          transparent 
          opacity={0.9} 
          color="#ffffff" 
          depthTest={false} 
          resolution={[width, height]} 
          lineWidth={3}
        />
      </mesh>
    </>
  )
}

// Create a canvas texture for the card - LARGER WHITE CARD WITH BLACK TEXT
function createCardTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 384  // Increased from 256
  canvas.height = 480 // Increased from 320
  const ctx = canvas.getContext('2d')
  
  // White background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 384, 480)
  
  // Subtle border with rounded corners effect
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 3
  ctx.strokeRect(2, 2, 380, 476)
  
  // Inner border for premium look
  ctx.strokeStyle = '#f3f4f6'
  ctx.lineWidth = 1
  ctx.strokeRect(8, 8, 368, 464)
  
  // HOPE3 Logo/Text - Black - Larger
  ctx.fillStyle = '#000000'
  ctx.font = 'bold 36px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('HOPE3', 192, 90)
  
  ctx.fillStyle = '#000000'
  ctx.font = '22px Arial'
  ctx.fillText('Foundation', 192, 120)
  
  // ID Card style header
  ctx.fillStyle = '#f8f9fa'
  ctx.fillRect(20, 140, 344, 2)
  
  // Card details - Black - Larger spacing
  ctx.fillStyle = '#000000'
  ctx.font = 'bold 20px Arial'
  ctx.textAlign = 'left'
  ctx.fillText('• Education', 40, 180)
  ctx.fillText('• Empowerment', 40, 210)
  ctx.fillText('• Entrepreneurship', 40, 240)
  
  // Decorative section divider
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(40, 270)
  ctx.lineTo(344, 270)
  ctx.stroke()
  
  // Mission section
  ctx.fillStyle = '#000000'
  ctx.font = 'bold 16px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('MISSION', 192, 300)
  
  // Bottom text - Black - Better spacing
  ctx.fillStyle = '#000000'
  ctx.font = '18px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('Transforming Lives', 192, 340)
  ctx.fillText('Through Education', 192, 365)
  
  // ID Card number
  ctx.fillStyle = '#666666'
  ctx.font = '12px Arial'
  ctx.textAlign = 'right'
  ctx.fillText('ID: H3F-2024-001', 360, 450)
  
  // Corner decorative elements
  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(40, 420, 4, 0, Math.PI * 2)
  ctx.fill()
  
  ctx.beginPath()
  ctx.arc(344, 420, 4, 0, Math.PI * 2)
  ctx.fill()
  
  return canvas
}
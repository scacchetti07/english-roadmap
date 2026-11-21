import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const RADIUS = 1
const DEG = Math.PI / 180

function latLonToVec3(lat: number, lon: number, r = RADIUS) {
  const phi = (90 - lat) * DEG
  const theta = (lon + 180) * DEG
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  )
}

const CITIES = {
  saoPaulo: { name: 'São Paulo', lat: -23.55, lon: -46.63, color: '#facc15' },
  toronto: { name: 'Toronto', lat: 43.65, lon: -79.38, color: '#22d3ee' },
  london: { name: 'London', lat: 51.51, lon: -0.13, color: '#c084fc' },
}

function DotSphere() {
  const geometry = useMemo(() => {
    const count = 2200
    const positions = new Float32Array(count * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      positions.set([Math.cos(theta) * r * RADIUS, y * RADIUS, Math.sin(theta) * r * RADIUS], i * 3)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [])

  useEffect(() => () => geometry.dispose(), [geometry])

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.016} color="#a78bfa" transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

function Arc({
  from,
  to,
  color,
  progress,
}: {
  from: THREE.Vector3
  to: THREE.Vector3
  color: string
  progress: number
}) {
  const SEGMENTS = 120
  const { track, line, curve } = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5)
    const lift = 1 + from.distanceTo(to) * 0.45
    mid.normalize().multiplyScalar(RADIUS * lift)
    const c = new THREE.QuadraticBezierCurve3(from, mid, to)
    const geo = new THREE.BufferGeometry().setFromPoints(c.getPoints(SEGMENTS))
    const trackLine = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.18 }),
    )
    const progressLine = new THREE.Line(
      geo.clone(),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1 }),
    )
    progressLine.geometry.setDrawRange(0, 0)
    return { track: trackLine, line: progressLine, curve: c }
  }, [from, to, color])

  useEffect(
    () => () => {
      track.geometry.dispose()
      line.geometry.dispose()
      ;(track.material as THREE.Material).dispose()
      ;(line.material as THREE.Material).dispose()
    },
    [track, line],
  )

  const tip = useRef<THREE.Mesh>(null)
  const shown = useRef(0)

  useFrame((_, delta) => {
    // anima suavemente até o progresso atual
    shown.current += (progress - shown.current) * Math.min(1, delta * 2.5)
    const count = Math.max(0, Math.round(shown.current * (SEGMENTS + 1)))
    line.geometry.setDrawRange(0, count)
    if (tip.current) {
      tip.current.visible = shown.current > 0.005
      tip.current.position.copy(curve.getPoint(Math.min(1, shown.current)))
      const s = 1 + Math.sin(performance.now() / 250) * 0.25
      tip.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      <primitive object={track} />
      <primitive object={line} />
      <mesh ref={tip}>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

function City({
  lat,
  lon,
  color,
  name,
  showLabel,
}: {
  lat: number
  lon: number
  color: string
  name: string
  showLabel: boolean
}) {
  const pos = useMemo(() => latLonToVec3(lat, lon, RADIUS * 1.005), [lat, lon])
  const ring = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!ring.current) return
    const t = (performance.now() / 1400) % 1
    ring.current.scale.setScalar(1 + t * 2.5)
    ;(ring.current.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - t)
  })
  const quaternion = useMemo(
    () =>
      new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        pos.clone().normalize(),
      ),
    [pos],
  )

  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={ring} quaternion={quaternion}>
        <ringGeometry args={[0.03, 0.04, 32]} />
        <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
      </mesh>
      {showLabel && (
        <Html
          center
          zIndexRange={[20, 0]}
          position={[0, 0.09, 0]}
          style={{ pointerEvents: 'none' }}
        >
          <span className="rounded-md border border-white/10 bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold whitespace-nowrap text-white backdrop-blur">
            {name}
          </span>
        </Html>
      )}
    </group>
  )
}

function Scene({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const sp = useMemo(() => latLonToVec3(CITIES.saoPaulo.lat, CITIES.saoPaulo.lon), [])
  const to = useMemo(() => latLonToVec3(CITIES.toronto.lat, CITIES.toronto.lon), [])
  const ld = useMemo(() => latLonToVec3(CITIES.london.lat, CITIES.london.lon), [])

  return (
    <>
      <Stars radius={60} depth={30} count={1500} factor={3} fade speed={reducedMotion ? 0 : 0.6} />
      <mesh>
        <sphereGeometry args={[RADIUS * 0.985, 64, 64]} />
        <meshBasicMaterial color="#0c0a1d" transparent opacity={0.92} />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS * 1.001, 36, 18]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.035} />
      </mesh>
      <DotSphere />
      <Arc from={sp} to={to} color={CITIES.toronto.color} progress={progress} />
      <Arc from={sp} to={ld} color={CITIES.london.color} progress={progress} />
      {Object.values(CITIES).map((c) => (
        <City key={c.name} {...c} showLabel />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.7}
        rotateSpeed={0.5}
      />
    </>
  )
}

export default function ProgressGlobe({
  progress,
  reducedMotion = false,
}: {
  progress: number
  reducedMotion?: boolean
}) {
  // câmera virada para o Atlântico, mostrando as três cidades
  const camera = useMemo(() => latLonToVec3(18, -40, 3.1).toArray() as [number, number, number], [])
  return (
    <Canvas
      camera={{ position: camera, fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      aria-label={`Globo 3D mostrando ${Math.round(progress * 100)}% do caminho de São Paulo até Toronto e Londres`}
    >
      <Scene progress={progress} reducedMotion={reducedMotion} />
    </Canvas>
  )
}

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type JewelryAtelier3DProps = {
  height?: string
  activeIndex: number
  onSelect?: (index: number) => void
}

const STATION_COUNT = 5

function makeDiamond(): THREE.Mesh {
  const geometry = new THREE.OctahedronGeometry(0.28, 0)
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xf7f3ea,
    metalness: 0.15,
    roughness: 0.08,
    transmission: 0.65,
    thickness: 0.4,
    ior: 2.4,
    transparent: true,
    opacity: 0.95,
  })
  return new THREE.Mesh(geometry, material)
}

function makeStation(index: number): THREE.Group {
  const group = new THREE.Group()
  group.position.x = (index - (STATION_COUNT - 1) / 2) * 2.35

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.65, 0.18, 32),
    new THREE.MeshStandardMaterial({
      color: 0xe2d9c8,
      roughness: 0.55,
      metalness: 0.08,
    }),
  )
  base.position.y = 0.09
  group.add(base)

  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 0.7, 16),
    new THREE.MeshStandardMaterial({
      color: 0x8a7a4b,
      roughness: 0.35,
      metalness: 0.75,
    }),
  )
  pillar.position.y = 0.55
  group.add(pillar)

  const tray = new THREE.Mesh(
    new THREE.BoxGeometry(0.95, 0.06, 0.7),
    new THREE.MeshStandardMaterial({
      color: 0xf3eee4,
      roughness: 0.45,
      metalness: 0.1,
    }),
  )
  tray.position.y = 0.95
  group.add(tray)

  const diamond = makeDiamond()
  diamond.position.y = 1.3
  diamond.userData.spin = 0.4 + index * 0.08
  group.add(diamond)

  // Soft station ring glow (olive accent when active via scale)
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.72, 0.02, 12, 48),
    new THREE.MeshStandardMaterial({
      color: 0x6b754c,
      emissive: 0x6b754c,
      emissiveIntensity: 0.15,
      roughness: 0.4,
      metalness: 0.2,
    }),
  )
  ring.rotation.x = Math.PI / 2
  ring.position.y = 0.02
  ring.userData.isRing = true
  group.add(ring)

  group.userData.index = index
  return group
}

export function JewelryAtelier3D({ height = '100vh', activeIndex, onSelect }: JewelryAtelier3DProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef(activeIndex)
  const stationsRef = useRef<THREE.Group[]>([])
  const cameraTargetRef = useRef(new THREE.Vector3(0, 1.1, 0))
  const cameraPosRef = useRef(new THREE.Vector3(0, 2.4, 7.2))

  useEffect(() => {
    activeRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const width = mount.clientWidth || 640
    const heightPx = mount.clientHeight || 480

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf3eee4)
    scene.fog = new THREE.Fog(0xf3eee4, 8, 18)

    const camera = new THREE.PerspectiveCamera(38, width / heightPx, 0.1, 40)
    camera.position.copy(cameraPosRef.current)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, heightPx)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xf7f1e4, 0.85)
    scene.add(ambient)

    const key = new THREE.DirectionalLight(0xfff6e8, 1.15)
    key.position.set(4, 8, 6)
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xd8e0c8, 0.45)
    fill.position.set(-5, 3, -2)
    scene.add(fill)

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(10, 64),
      new THREE.MeshStandardMaterial({
        color: 0xebe4d6,
        roughness: 0.9,
        metalness: 0,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    scene.add(floor)

    // Conveyor / atelier rail
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(12, 0.08, 1.4),
      new THREE.MeshStandardMaterial({
        color: 0xd6cdb8,
        roughness: 0.65,
        metalness: 0.15,
      }),
    )
    rail.position.y = 0.04
    scene.add(rail)

    const stations: THREE.Group[] = []
    for (let i = 0; i < STATION_COUNT; i += 1) {
      const station = makeStation(i)
      stations.push(station)
      scene.add(station)
    }
    stationsRef.current = stations

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()

    const onPointer = (event: PointerEvent) => {
      if (!onSelect) return
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const hits = raycaster.intersectObjects(stations, true)
      if (!hits.length) return
      let obj: THREE.Object3D | null = hits[0].object
      while (obj && obj.userData.index === undefined) obj = obj.parent
      if (obj && typeof obj.userData.index === 'number') {
        onSelect(obj.userData.index)
      }
    }

    renderer.domElement.addEventListener('pointerdown', onPointer)

    let frame = 0
    const clock = new THREE.Clock()

    const resize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(mount)

    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const active = activeRef.current

      stations.forEach((station, index) => {
        const focused = index === active
        const targetScale = focused ? 1.08 : 0.92
        station.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
        station.traverse((child) => {
          if (child instanceof THREE.Mesh && child.geometry instanceof THREE.OctahedronGeometry) {
            if (!reduced) child.rotation.y = t * (child.userData.spin || 0.5)
            child.position.y = 1.3 + (focused && !reduced ? Math.sin(t * 2) * 0.05 : 0)
          }
          if (child instanceof THREE.Mesh && child.userData.isRing) {
            const mat = child.material as THREE.MeshStandardMaterial
            mat.emissiveIntensity = focused ? 0.55 : 0.12
          }
        })
      })

      const focusX = (active - (STATION_COUNT - 1) / 2) * 2.35
      cameraTargetRef.current.lerp(new THREE.Vector3(focusX, 1.15, 0), 0.06)
      cameraPosRef.current.lerp(new THREE.Vector3(focusX * 0.35, 2.35, 6.8), 0.05)
      camera.position.copy(cameraPosRef.current)
      camera.lookAt(cameraTargetRef.current)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onPointer)
      renderer.dispose()
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose()
          const material = obj.material
          if (Array.isArray(material)) material.forEach((m) => m.dispose())
          else material.dispose()
        }
      })
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [onSelect])

  return (
    <div
      ref={mountRef}
      className="atelier-canvas"
      style={{ height, width: '100%' }}
      role="img"
      aria-label="Interactive 3D custom jewelry atelier with five curation stations"
    />
  )
}

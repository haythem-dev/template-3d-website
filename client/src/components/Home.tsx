
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
    const material = new THREE.MeshNormalMaterial()
    const torusKnot = new THREE.Mesh(geometry, material)
    
    scene.add(torusKnot)
    camera.position.z = 30
    
    gsap.to(torusKnot.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 8,
      ease: "none",
      repeat: -1
    })
    
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
    
    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])
  
  return (
    <div ref={containerRef} className="fixed inset-0 -z-10" />
  )
}

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Detect if device is low-power (mobile)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

function MetalParticles({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null);
  
  // Reduce particles on mobile for 60fps
  const particlesCount = isMobile ? 800 : 1500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    if (ref.current) {
      // Slower rotation for smoother mobile performance
      const speed = isMobile ? 0.5 : 1;
      ref.current.rotation.x = state.clock.elapsedTime * 0.015 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02 * speed;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FFC107"
        size={isMobile ? 0.025 : 0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingDust({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null);
  
  // Reduce particles on mobile
  const particlesCount = isMobile ? 200 : 400;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    if (ref.current) {
      const speed = isMobile ? 0.5 : 1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.008 * speed;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.4;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FF6B35"
        size={isMobile ? 0.02 : 0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ 
          antialias: false, 
          powerPreference: 'high-performance',
          alpha: false,
        }}
        frameloop={isMobile ? 'demand' : 'always'}
        performance={{ min: 0.5 }}
      >
        <fog attach="fog" args={['#0B0B0B', 5, 25]} />
        <ambientLight intensity={0.5} />
        <MetalParticles isMobile={isMobile} />
        <FloatingDust isMobile={isMobile} />
      </Canvas>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none" />
    </div>
  );
}

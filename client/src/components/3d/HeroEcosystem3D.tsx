import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

// Core Rotating Geometric Digital Intelligence Mesh
const DigitalCore: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const meshRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const innerIcosaRef = useRef<THREE.Mesh>(null);

  // Colors based on theme
  const coreColor = isDark ? '#3888ff' : '#005ee6';
  const ringColor = isDark ? '#6366f1' : '#4338ca';
  const accentColor = isDark ? '#06b6d4' : '#0284c7';

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle mouse tracking parallax
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.05;
    }

    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.x += delta * 0.2;
      innerIcosaRef.current.rotation.y += delta * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.15;
      ring1Ref.current.rotation.y += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.2;
      ring2Ref.current.rotation.z += delta * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z -= delta * 0.18;
      ring3Ref.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Quantum Node (Wireframe Icosahedron) */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={innerIcosaRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color={coreColor}
            wireframe
            transparent
            opacity={isDark ? 0.75 : 0.65}
            emissive={coreColor}
            emissiveIntensity={isDark ? 0.4 : 0.2}
          />
        </mesh>
      </Float>

      {/* Internal Glowing Energy Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color={accentColor} transparent opacity={isDark ? 0.5 : 0.4} />
      </mesh>

      {/* Orbiting Geometric Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshBasicMaterial color={ringColor} transparent opacity={isDark ? 0.8 : 0.6} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.012, 16, 100]} />
        <meshBasicMaterial color={coreColor} transparent opacity={isDark ? 0.6 : 0.5} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.9, 0.01, 16, 100]} />
        <meshBasicMaterial color={accentColor} transparent opacity={isDark ? 0.5 : 0.4} />
      </mesh>
    </group>
  );
};

// Orbiting Data Nodes with Connecting Lines
const InterconnectedNodes: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const nodesCount = 14;
  const groupRef = useRef<THREE.Group>(null);

  const nodePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < nodesCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5 + 2.2;
      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions.push([x, y, z]);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? '#3888ff' : '#6366f1'}
            transparent
            opacity={isDark ? 0.9 : 0.75}
          />
        </mesh>
      ))}
    </group>
  );
};

// Subtle Star / Particle Field - spreads widely to integrate across the hero
const ParticleCloud: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const count = 450;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread wider across X to float particles across into the text area
      pos[i * 3] = (Math.random() - 0.5) * 18 - 2.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={isDark ? '#7cb2ff' : '#005ee6'}
        size={0.038}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.55 : 0.35}
      />
    </Points>
  );
};

// Fallback visual for loading or lower power devices
const FallbackVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-brand-500/20 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute inset-4 rounded-full border border-indigo-500/25 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }} />
      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-500/20 to-indigo-500/20 blur-xl animate-pulse" />
      <div className="w-12 h-12 rounded-2xl bg-brand-500/30 border border-brand-400/40 backdrop-blur flex items-center justify-center font-display font-bold text-white text-lg">
        VN
      </div>
    </div>
  </div>
);

export const HeroEcosystem3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative w-full h-[420px] sm:h-[500px] lg:h-[580px] xl:h-[620px] ${className}`}>
      {/* Expansive Ambient Radial Glow that bridges across the hero atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[120%] bg-gradient-to-tr from-brand-500/20 via-indigo-500/15 to-cyan-400/10 dark:from-brand-500/25 dark:via-indigo-500/20 dark:to-cyan-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Suspense fallback={<FallbackVisual />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={isDark ? 0.7 : 0.95} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1.3 : 1.0} color="#3888ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.7} color="#6366f1" />

          <DigitalCore isDark={isDark} />
          <InterconnectedNodes isDark={isDark} />
          <ParticleCloud isDark={isDark} />
        </Canvas>
      </Suspense>
    </div>
  );
};

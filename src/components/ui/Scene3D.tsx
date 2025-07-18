import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text, Float } from "@react-three/drei";
import { Mesh } from "three";

const FloatingIcon = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time) * 0.3;
    meshRef.current.rotation.y = Math.cos(time) * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

const FloatingText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.5}
        color="#00D4FF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        {text}
      </Text>
    </Float>
  );
};

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className = "" }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9D4EDD" />
          
          <FloatingIcon position={[-2, 1, 0]} color="#00D4FF" />
          <FloatingIcon position={[2, -1, 0]} color="#9D4EDD" />
          <FloatingIcon position={[0, 2, -1]} color="#00F260" />
          
          <FloatingText text="Dev" position={[-1.5, -0.5, 0]} />
          <FloatingText text="Code" position={[1.5, 0.5, 0]} />
          <FloatingText text="Create" position={[0, -1.5, 0]} />
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};
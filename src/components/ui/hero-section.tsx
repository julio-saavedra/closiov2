import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';

const Box = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 20,
        curveSegments: 20
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial 
                color="#0066FF"
                metalness={0.9}
                roughness={0.1}
                reflectivity={0.9}
                ior={1.5}
                emissive="#0044CC"
                emissiveIntensity={0.3}
                transparent={true}
                opacity={0.8}
                transmission={0.2}
                thickness={0.5}
                clearcoat={0.8}
                clearcoatRoughness={0.1}
                sheen={0.5}
                sheenRoughness={0.2}
                sheenColor="#00AAFF"
                specularIntensity={1.0}
                specularColor="#00CCFF"
                iridescence={0.8}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[200, 600]}
                flatShading={false}
                side={0}
                alphaTest={0}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<any>();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.15;
            groupRef.current.rotation.y += delta * 0.08;
            groupRef.current.rotation.z += delta * 0.05;
        }
    });

    const boxes = Array.from({ length: 60 }, (_, index) => ({
        position: [
            (index - 30) * 0.8, 
            Math.sin(index * 0.3) * 2, 
            Math.cos(index * 0.2) * 3
        ] as [number, number, number],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            index * 0.08
        ] as [number, number, number],
        id: index
    }));

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

export const Scene = () => {
    const [cameraPosition] = React.useState<[number, number, number]>([8, 6, 25]);

    return (
        <div className="w-full h-full z-0">
            <Canvas camera={{ position: cameraPosition, fov: 45 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00AAFF" />
                <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0066FF" />
                <spotLight position={[0, 20, 10]} intensity={1.5} color="#00CCFF" angle={0.3} penumbra={0.5} />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const normalizeDecalScale = (decalScale) => {
  if (Array.isArray(decalScale)) {
    const [x = 1, y = 1, z = 1] = decalScale;
    return [x, y, z];
  }

  return [decalScale, decalScale, decalScale];
};

const Ball = React.memo(({ iconUrl, decalScale = 1 }) => {
  const [decal] = useTexture([iconUrl]);
  const decalScaleVector = normalizeDecalScale(decalScale);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={decalScaleVector}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon, decalScale }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball iconUrl={icon} decalScale={decalScale} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

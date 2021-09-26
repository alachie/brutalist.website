import { useRef, useState, Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import { TextureLoader } from '../node_modules/three/src/loaders/TextureLoader'
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls";
import { DoubleSide } from 'three'

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}

    />
  );
};


function Cylinder(props) {
  const mesh = useRef()

  const [text] = useLoader(TextureLoader, ['/text.png'])

  useFrame(({ clock }) => {
    mesh.current.rotation.y = -clock.getElapsedTime() / 2
    mesh.current.rotation.x = .1
    mesh.current.rotation.z = .2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale="1"
    >
      <cylinderGeometry args={[2, 2, .8, 40, 1, true]} />
      <meshStandardMaterial map={text} side={DoubleSide} alphaTest={0.7}/>
    </mesh>
  )
}

export default function CursorCube() {
  return (
    <div className="threed-page checker-bg">
      <Canvas>
        <Suspense fallback={null}>
          <CameraControls/>
          <ambientLight intensity={.5}/>
          {/* <pointLight position={[10, 10, 10]} /> */}

          <Cylinder position={[0, 0, 0]}/>

        </Suspense>
      </Canvas>,
    </div>
  )
}

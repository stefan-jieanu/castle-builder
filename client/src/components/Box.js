import * as React from 'react';
import * as Canvas from '@react-three/fiber';

export default function Box(props) {
  const ref = React.useRef();

  const [hovered, hover] = React.useState(false);
  const [clicked, click] = React.useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  Canvas.useFrame((state, delta) => (ref.current.rotation.x += 0.1));

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
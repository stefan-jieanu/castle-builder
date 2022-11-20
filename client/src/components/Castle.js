import * as React from 'react';
import * as Canvas from '@react-three/fiber';
import { useSelector } from 'react-redux';

export default function Castle(props) {
  const conf = useSelector((state) => state.castleConf);

  const ref = React.useRef();

  const [hovered, hover] = React.useState(false);
  const [clicked, click] = React.useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  Canvas.useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      rotation={[10, 0, 0]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={conf.geometry} />
      <meshStandardMaterial color={hovered ? conf.hoverColor : conf.color} />
    </mesh>
  );
}
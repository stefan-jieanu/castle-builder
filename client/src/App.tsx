import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import SketchCanvas from './components/Sketch/SketchCanvas'
import SketchMenu from './components/Sketch/SketchMenu'
import './tailwind-dist/index.css'

function App() {
  return (
    <div>
      <NavbarComponent />
      <SketchCanvas />
      <div>
        <SketchMenu />
      </div>
    </div>
  )
}

export default App

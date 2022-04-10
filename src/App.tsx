import { useState } from 'react'
import './App.css'
import Dock from './components/Dock';

function App() {

  return (
    <div className="App">

      <div className="desktop">

      </div>

      <div className="dock-container">
        <Dock />
      </div>

    </div>
  )
}

export default App

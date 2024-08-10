import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator'

function App() {


  return (
    <div>
      <QRCodeGenerator />
    </div>
  )
}

export default App;

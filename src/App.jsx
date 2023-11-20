import { useState } from 'react'
import './App.css'
import RoutesTree from './router/RoutesTree'
import { BrowserRouter as Router } from 'react-router-dom'
import UserRequierementsChoicesProvider from './providers/UserRequierementsChoices'
import CursorPositionProvider from './providers/CursorPositionProvider'

function App() {


  return (
    <Router>
      <RoutesTree />
    </Router>
  )
}

export default App

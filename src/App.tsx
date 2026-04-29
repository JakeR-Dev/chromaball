import { useState } from 'react'
import { Welcome } from './components/Welcome'
import { GameScreen } from './components/GameScreen'
import './App.scss'

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  return (
    <main>
      {showWelcomeScreen ? (
        <Welcome setShowWelcomeScreen={setShowWelcomeScreen} />
      ) : (
        <GameScreen />
      )}
    </main>
  )
}

export default App

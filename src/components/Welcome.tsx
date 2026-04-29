type WelcomeProps = {
  setShowWelcomeScreen: (value: boolean) => void
}

export const Welcome = ({ setShowWelcomeScreen }: WelcomeProps) => {
  return (
    <div className="welcome-screen container text-center">
      <h1>Chromaball</h1>
      <button
        onClick={() => setShowWelcomeScreen(false)}
        className="btn">
        Start Game
      </button>
    </div>
  )
}
import { POV } from './POV';
import { Game } from './Game';

export const GameScreen = () => {
  return (
    <div className="game-screen">
      <POV />
      <Game />
    </div>
  )
}
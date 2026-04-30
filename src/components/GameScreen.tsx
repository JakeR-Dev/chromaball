import { POV } from './POV';
import { Game } from './Game';
import { Adversary } from './Adversary';

export const GameScreen = () => {
  return (
    <div className="game-screen">
      <POV />
      <Game />
      <Adversary />
    </div>
  )
}
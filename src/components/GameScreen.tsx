import { useEffect, useRef, useState } from 'react';
import { POV } from './POV';
import { Adversary } from './Adversary';

export const GameScreen = () => {
  const [score, setScore] = useState(0);

  /**
   * adversary spawning and management
   */

  // stores active adversary instance ids so each one can render independently
  const [adversaryIds, setAdversaryIds] = useState<number[]>([]);
  // tracks the next unique id value used when spawning a new adversary
  const nextAdversaryId = useRef(0);

  // creates and returns a new unique adversary id
  const createAdversaryId = () => {
    const id = nextAdversaryId.current;
    nextAdversaryId.current += 1;
    return id;
  };

  useEffect(() => {
    let timeoutId: number;
    let isMounted = true;

    // adds one adversary id to state which causes a new adversary to render
    const spawnAdversary = () => {
      setAdversaryIds((currentIds) => [...currentIds, createAdversaryId()]);
    };

    // ensures at least one adversary exists on screen
    const ensureAdversaryOnScreen = () => {
      setAdversaryIds((currentIds) => {
        if (currentIds.length > 0) {
          return currentIds;
        }

        return [createAdversaryId()];
      });
    };

    // schedules the next spawn after a random delay between 2s and 4s
    const scheduleNextSpawn = () => {
      const delay = Math.random() * 2000 + 2000;
      timeoutId = window.setTimeout(() => {
        if (!isMounted) {
          return;
        }

        spawnAdversary();
        scheduleNextSpawn();
      }, delay);
    };

    // spawns one immediately when the game screen mounts
    ensureAdversaryOnScreen();
    // starts the recurring random spawn cycle
    scheduleNextSpawn();

    return () => {
      // prevents state updates after unmount and clears the pending timeout
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  // removes an adversary after its animation completes
  const removeAdversary = (id: number) => {
    setAdversaryIds((currentIds) => {
      const remainingIds = currentIds.filter((currentId) => currentId !== id);
      if (remainingIds.length > 0) {
        return remainingIds;
      }

      return [createAdversaryId()];
    });
  };

  /**
   * background parallax shift
  **/

  // how aggressive the parallax effect is
  const max_parallax_offset = 48

  // keep the background shift in css vars so they can be used in the stylesheet
  const [backgroundPosition, setBackgroundPosition] = useState({
    '--bg-pos-x': '50%',
    '--bg-pos-y': '50%',
  } as React.CSSProperties)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    // convert the cursor position into an offset from the game center
    const offsetX = ((clientX - left) / width - 0.5) * max_parallax_offset
    const offsetY = ((clientY - top) / height - 0.5) * max_parallax_offset

    // feed new offsets into the existing css vars to shift the background position
    setBackgroundPosition({
      '--bg-pos-x': `calc(50% - ${offsetX}px)`,
      '--bg-pos-y': `calc(50% - ${offsetY}px)`,
    } as React.CSSProperties)
  }

  return (
    <div
      className="game-screen"
      onMouseMove={handleMouseMove}
      style={backgroundPosition}
    >
      <POV score={score} />
      {/* renders one adversary component per active id */}
      {adversaryIds.map((id) => (
        <Adversary setScore={setScore} key={id} onDone={() => removeAdversary(id)} />
      ))}
    </div>
  )
}
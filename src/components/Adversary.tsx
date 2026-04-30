export const Adversary = () => {
  // random color from list of theme color pallete
  const colors = ['--color-blue', '--color-red', '--color-green', '--color-yellow', '--color-orange'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // random position from top: 0 to 100vh, left: 0 to 100vw
  const posX = `${Math.random() * 100}vw`;
  const posY = `${Math.random() * 100}vh`;

  // random animation direction and speed from 2s to 5s, linear, once
  const animationDirections = ['move-up', 'move-down', 'move-left', 'move-right'];
  const animationDirection = animationDirections[Math.floor(Math.random() * animationDirections.length)];
  const animationDuration = `${Math.random() * 3 + 2}s`;

  return (
    <div
      className="adversary"
      style={{
        backgroundColor: `var(${color})`,
        left: posX,
        top: posY,
        animation: `${animationDirection} ${animationDuration} linear 1`
      }}></div>
  )
}
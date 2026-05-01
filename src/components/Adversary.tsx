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
        // backgroundColor: `var(${color})`,
        ['--alien-color' as string]: `var(${color})`,
        left: posX,
        top: posY,
        animation: `${animationDirection} ${animationDuration} linear 1`
      }}>
        <svg width="100%" viewBox="0 0 680 500" role="img" xmlns="http://www.w3.org/2000/svg">

          {/* legs */}
          <rect x="306" y="385" width="28" height="55" rx="14" fill="var(--alien-color, #4ade80)" transform="rotate(-7 320 412)"/>
          <rect x="348" y="385" width="28" height="55" rx="14" fill="var(--alien-color, #4ade80)" transform="rotate(7 362 412)"/>

          {/* body */}
          <rect x="300" y="320" width="80" height="75" rx="22" fill="var(--alien-color, #4ade80)"/>

          {/* noodle arms */}
          <path d="M302 342 Q250 320 228 356" stroke="var(--alien-color, #4ade80)" strokeWidth="22" fill="none" strokeLinecap="round"/>
          <path d="M378 342 Q430 320 452 356" stroke="var(--alien-color, #4ade80)" strokeWidth="22" fill="none" strokeLinecap="round"/>

          {/* head */}
          <circle cx="340" cy="226" r="108" fill="var(--alien-color, #4ade80)"/>

          {/* antennae */}
          <line x1="314" y1="120" x2="278" y2="64" stroke="var(--alien-color, #4ade80)" strokeWidth="8" strokeLinecap="round"/>
          <line x1="366" y1="120" x2="402" y2="64" stroke="var(--alien-color, #4ade80)" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="274" cy="56" r="13" fill="var(--alien-color, #4ade80)"/>
          <circle cx="406" cy="56" r="13" fill="var(--alien-color, #4ade80)"/>

          {/* eyes: white outer, black inner only */}
          <circle cx="300" cy="220" r="48" fill="white"/>
          <circle cx="382" cy="224" r="30" fill="white"/>
          <circle cx="290" cy="232" r="26" fill="#111"/>
          <circle cx="390" cy="216" r="16" fill="#111"/>
          {/* shine */}
          <circle cx="306" cy="210" r="9" fill="white" opacity="0.65"/>
          <circle cx="376" cy="218" r="6" fill="white" opacity="0.65"/>

          {/* mouth: black hole with two teeth */}
          <ellipse cx="340" cy="284" rx="28" ry="18" fill="#111"/>
          <rect x="326" y="270" width="13" height="16" rx="3" fill="white"/>
          <rect x="342" y="272" width="13" height="16" rx="3" fill="white"/>
        </svg>
      </div>
  )
}
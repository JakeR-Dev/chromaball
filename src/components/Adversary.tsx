import { useEffect, useMemo, useRef, useState } from 'react';

type AdversaryProps = {
  onDone?: () => void;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const Adversary = ({ onDone, setScore }: AdversaryProps) => {
  const adversaryStyle = useMemo(() => {
    // random color from list of theme color pallete
    const colors = ['--color-blue', '--color-red', '--color-green', '--color-yellow', '--color-orange'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // random position from top: 0 to 100vh, left: 0 to 100vw
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // set trajectory of animation based on initial position
    const trajectoryX = posX > 50 ? 'move-left' : 'move-right';
    const trajectoryY = posY > 50 ? 'move-up' : 'move-down';

    // random animation direction and speed from 4s to 8s
    const animationDirection = trajectoryX + '-' + trajectoryY;
    const animationDuration = `${Math.floor(Math.random() * 5) + 4}s`;

    // animation easing functions https://easings.net/
    const animationEase = [
      // easeInOutQuint
      'cubic-bezier(0.83, 0, 0.17, 1)',
      // easeInBack
      'cubic-bezier(0.36, 0, 0.66, -0.56)',
      // easeOutCirc
      'cubic-bezier(0, 0.55, 0.45, 1)',
      // easeOutCubic
      'cubic-bezier(0.33, 1, 0.68, 1)'
    ];
    const animationEaseFunction = animationEase[Math.floor(Math.random() * animationEase.length)];

    return {
      ['--alien-color' as string]: `var(${color})`,
      left: `${posX}vw`,
      top: `${posY}vh`,
      animation: `${animationDirection} ${animationDuration} ${animationEaseFunction} 1 forwards`
    };
  }, []);

  // point gathering on adversary click
  const [clickCounter, setClickCounter] = useState(0);
  const hasAwardedPoint = useRef(false);

  // make sure the score only goes up once per adversary
  useEffect(() => {
    if (clickCounter === 3 && !hasAwardedPoint.current) {
      hasAwardedPoint.current = true;
      setScore((previousScore) => previousScore + 1);
    }
  }, [clickCounter, setScore]);

  // set adversary class based on number of clicks
  const adversaryClass =
        clickCounter === 1 ? 'one' :
        clickCounter === 2 ? 'two' :
        clickCounter >= 3 ? 'three' : '';

  // increment how many clicks on this adversary
  const adversaryClick = () => {
    setClickCounter((previousCount) => Math.min(previousCount + 1, 3));
  }

  return (
    <div
      className={`adversary ${adversaryClass}`}
      onAnimationEnd={onDone}
      onClick={() => adversaryClick()}
      style={adversaryStyle}>
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
          <g id="head">
            <circle cx="340" cy="226" r="108" fill="var(--alien-color, #4ade80)" />

            {/* antennae */}
            <line x1="314" y1="120" x2="278" y2="64" stroke="var(--alien-color, #4ade80)" strokeWidth="8" strokeLinecap="round"/>
            <line x1="366" y1="120" x2="402" y2="64" stroke="var(--alien-color, #4ade80)" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="274" cy="56" r="13" fill="var(--alien-color, #4ade80)"/>
            <circle cx="406" cy="56" r="13" fill="var(--alien-color, #4ade80)"/>

            {/* eyes: white outer, black inner only */}
            <g id="eyes">
              <circle cx="300" cy="220" r="48" fill="white"/>
              <circle cx="382" cy="224" r="30" fill="white"/>
              <circle cx="290" cy="232" r="26" fill="#111"/>
              <circle cx="390" cy="216" r="16" fill="#111"/>
            </g>
          </g>

          {/* mouth: black hole with two teeth */}
          <ellipse cx="340" cy="284" rx="28" ry="18" fill="#111"/>
          <rect x="326" y="270" width="13" height="16" rx="3" fill="white"/>
          <rect x="342" y="272" width="13" height="16" rx="3" fill="white"/>
        </svg>
      </div>
  )
}
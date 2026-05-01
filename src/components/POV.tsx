type POVProps = {
  score: number;
};

export const POV = ({ score }: POVProps) => {
  return (
    <div className="pov-wrapper">
      {/* goggles overlay */}
      <svg
        className="pov"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        height="100vh"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="goggle-cutout">
            <rect width="100%" height="100%" fill="white"/>

            <path
              fill="black"
              fillRule="evenodd"
              d="
                M100,210
                C100,110 180,60 280,50
                L920,50
                C1020,60 1100,110 1100,210
                L1100,390
                C1100,490 1020,540 920,550
                L720,550
                C680,550 655,535 635,528
                C615,495 585,495 565,528
                C545,535 520,550 480,550
                L280,550
                C180,540 100,490 100,390
                Z
              "
            />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="#0D0D1A" mask="url(#goggle-cutout)"/>
      </svg>

      {/* HUD */}
      <div className="hud">
        <span className="score">Score: {score}</span>
      </div>
    </div>
  )
}
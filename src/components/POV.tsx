export const POV = () => {
  return (
    <div className="pov-wrapper">
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
                M120,260
                C120,180 180,130 260,120
                L940,120
                C1020,130 1080,180 1080,260
                L1080,380
                C1080,460 1020,510 940,520
                L720,520
                C680,520 650,500 630,460
                C615,430 585,430 570,460
                C550,500 520,520 480,520
                L260,520
                C180,510 120,460 120,380
                Z
              "
            />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="#0D0D1A" mask="url(#goggle-cutout)"/>
      </svg>
    </div>
  )
}
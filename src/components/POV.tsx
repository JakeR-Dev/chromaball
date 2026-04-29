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

            <path d="
              M140,300
              C140,160 320,90 600,90
              C880,90 1060,160 1060,300
              C1060,440 880,510 600,510
              C320,510 140,440 140,300
              Z" fill="black" fillRule="evenodd"/>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="#1A1A2E" mask="url(#goggle-cutout)"/>
      </svg>
    </div>
  )
}
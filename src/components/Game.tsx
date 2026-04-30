import { useState } from 'react'

// how aggressive the parallax effect is
const max_parallax_offset = 48

export const Game = () => {
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

  const handleMouseLeave = () => {
    // snap back to the centered background when the cursor leaves the game area
    setBackgroundPosition({
      '--bg-pos-x': '50%',
      '--bg-pos-y': '50%',
    } as React.CSSProperties)
  }

  return (
    <div
      className="game"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={backgroundPosition}
    />
  )
}
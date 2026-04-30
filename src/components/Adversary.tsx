export const Adversary = () => {
  const colors = ['--color-blue', '--color-red', '--color-green', '--color-yellow', '--color-orange'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="adversary" style={{ backgroundColor: `var(${color})` }}></div>
  )
}
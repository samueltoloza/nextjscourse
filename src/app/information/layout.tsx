import "./information.layout.scss"

function CardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="information-layout">{children}</div>
  )
}

export default CardLayout
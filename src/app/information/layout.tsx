import cardLayoutStyles from "./information.layout.module.scss"

function CardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={cardLayoutStyles.informationlayout}>{children}</div>
  )
}

export default CardLayout
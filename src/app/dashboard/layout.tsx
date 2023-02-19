interface Props {
    children: React.ReactNode
}

function layout({ children }: Props) {
  return (
    <div style={{ color: "red", padding: "15px" }}>
      <h3>Navbar</h3>
      {children}
    </div>
  )
}

export default layout
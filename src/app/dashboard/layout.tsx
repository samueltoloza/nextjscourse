interface Props {
    children: React.ReactNode
}

function layout({ children }: Props) {
  return (
    <div style={{ color: "red", padding: "15px" }}>{children}</div>
  )
}

export default layout
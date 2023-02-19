import { notFound } from 'next/navigation'

function NotFoundComponents() {
    notFound()
  return (
    <div>Esto ni lo vas a ver</div>
  )
}

export default NotFoundComponents
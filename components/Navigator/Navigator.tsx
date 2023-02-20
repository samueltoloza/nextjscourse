import { Route } from "models"
import Link from "next/link"

interface Props {
    pathName: Route[]
}

function Navigator({ pathName }: Props) {
  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'row'}}>
        {pathName.map((pathName) => (
            <Link className="bg-fuchsia-500 hover:bg-sky-700" key={pathName.name} href={pathName.path}>{pathName.name}</Link>
        ))}
    </div>
  )
}

export default Navigator
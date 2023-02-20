import { Navigator } from "components"
import { Routes } from "models"
import Link from "next/link"

function app() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>what do you want to see ?</h2>
      <Navigator pathName={[Routes.CHARACTER, Routes.LOCATION]} />
    </div>
  )
}

export default app


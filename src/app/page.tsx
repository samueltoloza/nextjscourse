import { Navigator } from "components"
import { Routes } from "models"
import Image from "next/image"
import orrego from "public/orrego.jpg"
import Script from "next/script"
import React, { lazy, Suspense } from "react"
import dynamic from "next/dynamic"

// const Card = React.lazy(() => import('../../components/Card/Card'));
const Card = dynamic(() => import('../../components/Card/Card'), { ssr: false });

function app() {
  return (
    <Suspense fallback={<div>Hola</div>}>
      <Script onReady={
        () => {
          console.log('loaded')
        }
      } dangerouslySetInnerHTML={{
        __html: `
          document.body.style.backgroundColor = "#f0f0f0";
        `,
      }}/>
      <div style={{position:'relative'}}>
        <h1>Welcome to Rick and Morty app</h1>
        <h2>what do you want to see ?</h2>
        <Navigator pathName={[Routes.CHARACTER, Routes.LOCATION]} />
        <Image alt="Image" src={orrego} placeholder='blur' priority />
      </div>
    </Suspense>
  )
}

export default app


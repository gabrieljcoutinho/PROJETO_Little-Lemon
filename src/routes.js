import React from 'react'



import Header from './ts/Header.tsx'
import MainConteudoPrincipal from "./ts/MainConteudoPrincipal.tsx"
import SectionPratos from "./ts/SectionPratos.jsx"

const routes = () => {
  return (
    <div>

            <Header />

                 <MainConteudoPrincipal />

                 <SectionPratos />


    </div>
  )
}

export default routes
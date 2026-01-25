import React from 'react'



import Header from './ts/Header.tsx'
import MainConteudoPrincipal from "./ts/MainConteudoPrincipal.tsx"
import SectionPratos from "./ts/SectionPratos.jsx"
import SectionComentarios from "./ts/SectionComentario.jsx"

const routes = () => {
  return (
    <div>

            <Header />

                 <MainConteudoPrincipal />

                 <SectionPratos />

        <SectionComentarios />

    </div>
  )
}

export default routes
import React from 'react'



import Header from './ts/Header.tsx'
import MainConteudoPrincipal from "./ts/MainConteudoPrincipal.tsx"
import SectionPratos from "./ts/SectionPratos.jsx"
import SectionComentarios from "./ts/SectionComentario.jsx"
import SectionChicago from "./ts/SectionChicago.jsx"
import Footer from "./ts/Footer.jsx"

const routes = () => {
  return (
    <div>

            <Header />

                 <MainConteudoPrincipal />

                 <SectionPratos />

        <SectionComentarios />

        <SectionChicago />

        <Footer />

    </div>
  )
}

export default routes
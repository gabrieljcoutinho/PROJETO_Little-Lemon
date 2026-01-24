import React from 'react'

import "../css/mainPrincipal.css"

type Props = {}

const MainConteudoPrincipal = (props: Props) => {
  return (
    <div className='mainPrincipal'>

        <p className="pMainConteudoPrinciapal">Little Lemon</p>

        <p className="pMainConteudoSecundario">Chicago</p>

          <p className="pMainConteudoTerciario">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

          <button className='btnMainPrincipal'>Reserve a Table</button>

    </div>
  )
}

export default MainConteudoPrincipal
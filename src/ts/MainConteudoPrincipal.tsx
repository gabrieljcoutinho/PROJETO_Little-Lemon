import React from 'react'

import imgMain from "../../src/imgs/imgPrincipal.png"

import "../css/mainPrincipal.css"

type Props = {}

const MainConteudoPrincipal = (props: Props) => {
  return (
    <div className='mainPrincipal'>

       <div className="conteudoParagrafo">
         <p className="pMainConteudoPrinciapal">Little Lemon</p>

        <p className="pMainConteudoSecundario">Chicago</p>

          <p className="pMainConteudoTerciario">We are a family owned Mediterranean <br/>
             restaurant, focused on traditional recipes <br/>
             served with a modern twist.</p>

          <button className='btnMain'>Reserve a Table</button>
       </div>

       <img src={imgMain} alt="" className='imgMainPrincipal' />

    </div>
  )
}

export default MainConteudoPrincipal
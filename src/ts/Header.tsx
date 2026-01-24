import React from 'react'
import logoHeader from "../imgs/imgHeader.png"

import "../css/Header.css"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='Header'>
            <img src={logoHeader} alt=""  className='imgHeader'/>

                <ul className='listaHeader'>
                    <li ><a href="#" className='linksDaLista'>Home</a></li>
                    <li><a href="#" className='linksDaLista'>About</a></li>
                    <li><a href="#" className='linksDaLista'>Menu</a></li>
                    <li><a href="#" className='linksDaLista'>Resevations</a></li>
                    <li><a href="#" className='linksDaLista'>Order Online</a></li>
                    <li><a href="#" className='linksDaLista'>Login</a></li>
                </ul>

    </div>
  )
}

export default Header
import React from 'react'
import logoHeader from "../imgs/imgHeader.png"

import "../css/Header.css"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='Header'>
            <img src={logoHeader} alt="" />

                <ul className='listaHeader'>
                    <li ><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Resevations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>

    </div>
  )
}

export default Header
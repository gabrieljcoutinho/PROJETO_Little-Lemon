import React, { useState } from 'react'
import logoHeader from "../imgs/imgHeader.png"
import "../css/Header.css"

type Props = {}

const Header = (props: Props) => {
  // Estado para guardar qual link está ativo (começa com 'home')
  const [ativo, setAtivo] = useState('home');

  return (
    <div className='Header'>
      <img src={logoHeader} alt="" className='imgHeader'/>

      <ul className='listaHeader'>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'home' ? 'active' : ''}
             onClick={() => setAtivo('home')}>Home</a>
        </li>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'about' ? 'active' : ''}
             onClick={() => setAtivo('about')}>About</a>
        </li>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'menu' ? 'active' : ''}
             onClick={() => setAtivo('menu')}>Menu</a>
        </li>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'res' ? 'active' : ''}
             onClick={() => setAtivo('res')}>Resevations</a>
        </li>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'order' ? 'active' : ''}
             onClick={() => setAtivo('order')}>Order Online</a>
        </li>
        <li>
          <a href="#"
             className='linksDaLista'
             id={ativo === 'login' ? 'active' : ''}
             onClick={() => setAtivo('login')}>Login</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
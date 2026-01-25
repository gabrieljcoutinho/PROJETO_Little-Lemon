import React from 'react'
import "../css/comentarios.css"

import estrela from "../imgs/star.png"

type Props = {}

const SectionComentario = (props: Props) => {
  return (
    <div className='sectionComentario'>

            <h2 className='subtitulo'>Our customers love us!</h2>

            <div className="flex">

            <div className="comentarios">
                  <ul className="listaEstrelas">
                    <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
              <img src={estrela} alt=""  className='imgEstrela'/>
                  </ul>
            </div>

            <div className="comentarios">
              <div className="comentarios">
                  <ul className="listaEstrelas">
                    <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
              <img src={estrela} alt=""  className='imgEstrela'/>
                  </ul>
            </div>
            </div>

            <div className="comentarios">
        <div className="comentarios">
                  <ul className="listaEstrelas">
                    <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
              <img src={estrela} alt=""  className='imgEstrela'/>
                  </ul>
            </div>
            </div>


            <div className="comentarios">
      <div className="comentarios">
                  <ul className="listaEstrelas">
                    <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
            <img src={estrela} alt=""  className='imgEstrela'/>
              <img src={estrela} alt=""  className='imgEstrela'/>
                  </ul>
            </div>
            </div>

            </div>

    </div>
  )
}

export default SectionComentario
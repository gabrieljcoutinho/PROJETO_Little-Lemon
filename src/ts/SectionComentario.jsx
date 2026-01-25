import React from 'react'
import "../css/comentarios.css"

import estrela from "../imgs/star.png"

import perfil from "../imgs/perfil.png"

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

                        <h3 className='review'>Review title</h3>
                                  <h4 className='Subreview'>Review body</h4>

                                 <div className="perfilUsuario">
                                   <img src={perfil} alt="" className='imgPerfilComentary' />
                                   <p className="userName">User Name</p>
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

                       <h3 className='review'>Review title</h3>
                                 <h4 className='Subreview'>Review body</h4>

                                 <div className="perfilUsuario">
                                   <img src={perfil} alt="" className='imgPerfilComentary' />
                                   <p className="userName">User Name</p>
                                 </div>
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
     <h3 className='review'>Review title</h3>
          <h4 className='Subreview'>Review body</h4>

            <div className="perfilUsuario">
                                   <img src={perfil} alt="" className='imgPerfilComentary' />
                                   <p className="userName">User Name</p>
                                 </div>

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
                       <h3 className='review'>Review title</h3>
                                 <h4 className='Subreview'>Review body</h4>

                                 <div className="perfilUsuario">
                                   <img src={perfil} alt="" className='imgPerfilComentary' />
                                   <p className="userName">User Name</p>
                                 </div>
            </div>
            </div>

            </div>

    </div>
  )
}

export default SectionComentario
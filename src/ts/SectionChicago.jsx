import React from 'react'
import "../css/sectionChicago.css"

import img1Chicago from "../imgs/cooked.png"
import img2Chicago  from "../imgs/cooked2.png"

type Props = {}

const SectionChicago = (props: Props) => {
  return (
    <div className='sectionChicago'>

          <ul className="listaConteudoChicagoTexto">
                  <h2 className='subTituloChicago'>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className="chicagoParagrafo">
                    Little Lemon is a charming neighborhood bistro that <br/>
                     serves simple food and classic cocktails in a lively  <br/>
                     but casual environment the restaurant features a  <br/>
                      locally sourced menu with daily specials.Little Lemon  <br/>
                       is a charming neighborhood bistro that serves  <br/>
                       simple food and classic cocktails in a lively but  <br/>
                       casual environment the restaurant features a locally  <br/>
                       sourced menu with daily specials.</p>
          </ul>

          <div className="imgsChicago">
                <img src={img1Chicago} alt="" />
                  <img src={img2Chicago} alt="" />
          </div>

    </div>
  )
}

export default SectionChicago
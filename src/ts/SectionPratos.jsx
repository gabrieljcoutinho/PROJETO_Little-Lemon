import React from 'react'
import "../css/sectionPratos.css"

import prato1 from "../../src/imgs/foodSpecial1.png"
import prato2 from "../../src/imgs/foodSpecial2.png"
import prato3 from "../../src/imgs/foodSpecial3.png"

type Props = {}

const SectionPratos = (props: Props) => {
  return (
    <div>


          <div className="divButton">

        <a className="sectionPratosButton">Buy Online</a>
          </div>

            <div className="subTitulo">This Week is specials!</div>


            <div className="flexbox">

            <div class="div1">
              <img src={prato1} alt="" />
            </div>

            <div class="div1">
               <img src={prato2} alt="" />
            </div>

            <div class="div1">
               <img src={prato3} alt="" />
            </div>

            </div>

    </div>
  )
}

export default SectionPratos
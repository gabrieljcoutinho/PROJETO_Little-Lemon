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
                  <ul className='itensPratos'>
                    <li>Greek salad</li>
                    <li>R$: 12,99</li>
                  </ul>
            </div>

            <div class="div1">
               <img src={prato2} alt="" />
               <ul className="itensPratos">
                <p>Bruchetta</p>
                <li>R$: 5,99</li>
               </ul>
            </div>

            <div class="div1">
               <img src={prato3} alt="" />
            <ul className='itensPratos'>
                 <p>Lemon Dessert</p>
                <li>R$: 5,00</li>
            </ul>
            </div>

            </div>

    </div>
  )
}

export default SectionPratos
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
                  <ul className='itensPratosUl'>
                    <li className='itensPratos nomePrato'>Greek salad</li>
                    <li className='itensPratos precoPRato'>R$: 12,99</li>

                </ul>

                 <p className='descricaoPrato'>
                      The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </p>
            </div>

            <div class="div1">
               <img src={prato2} alt="" />
               <ul className="itensPratosUl">
                <li className='itensPratos nomePrato'>Bruchetta</li>
                <li className='itensPratos  precoPRato'>R$: 5,99</li>
               </ul>

                <p className='descricaoPrato'>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </p>

            </div>

            <div class="div1">
               <img src={prato3} alt="" />
            <ul className='itensPratosUl'>
                 <li className='itensPratos nomePrato'>Lemon Dessert</li>
                <li className='itensPratos precoPRato'>R$: 5,00</li>
            </ul>

            <p className='descricaoPrato'>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>

            </div>

            </div>

    </div>
  )
}

export default SectionPratos
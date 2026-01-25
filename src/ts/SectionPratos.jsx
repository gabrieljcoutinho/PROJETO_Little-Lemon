import React from 'react'
import "../css/sectionPratos.css"

type Props = {}

const SectionPratos = (props: Props) => {
  return (
    <div>


          <div className="divButton">

        <a className="sectionPratosButton">Buy Online</a>
          </div>

            <div className="subTitulo">This Week is specials!</div>


            <div className="flexbox">

                <div className="divFlexBoxConteudo">1</div>

               <div className="divFlexBoxConteudo">2</div>

              <div className="divFlexBoxConteudo">3</div>

            </div>

    </div>
  )
}

export default SectionPratos
import siteMetadata from '@/data/siteMetadata2'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'

import { useState } from 'react'

export default function Comidas() {
  const initialState = 1
  const [gross, setGross] = useState(initialState)

  const grosse = () => {
    setGross(gross + 0.02)
  }

  const grosseOut = () => {
    setGross(gross - 0.02)
  }

  const tipografia = () => {
    var section = document.querySelectorAll < HTMLElement > 'section'
    for (let i = 0; i < section.length; i++) {
      section[i].style.fontSize = '1.3rem'
    }
  }

  const guiso = '/static/images/guiso.jpeg'

  return (
    <>
      {/* <form>
      <input type='text' name='text'></input>
      <button onClick={text}></button>
    </form> */}

      <div className="box">
        {/* GUISO */}
        <section className="section" style={{ fontSize: `${gross}` + 'rem' }}>
          <h1>Guisito de chorizo sin cebolla</h1>
          <h1>Este es el mejor guiso que me hice en toda mi vida</h1>
          <div className="img" style={{ backgroundImage: `url(/static/images/guiso.jpeg)` }}></div>
          <ul>
            <li>- 3 Chorizo</li>
            <li>- 1/2 taza de Arroz</li>
            <li>- 3 pimientos</li>
            <li>- 200ml salsa de tomate</li>
            <li>- papa y batata</li>
          </ul>
        </section>

        <br></br>
        {/* <Image
              src={guiso}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={426}
          /> */}
      </div>

      {/* BOTONES GROSSE BUCHSTABE*/}

      <button className="button2" onClick={grosse}>
        +
      </button>
      <button className="button3" onClick={grosseOut}>
        -
      </button>

      <style jsx>{`
        .img {
          border-radius: 10px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin: auto;
          height: 23rem;
          width: 29.4rem;
          transform: scale(1);
          transition: 0.2s;
        }
        .img:hover {
        }
        .button2 {
          border-radius: 50%;
          position: fixed;
          bottom: 2rem;
          left: 0.4rem;
          background-color: blue;
          height: 2rem;
          width: 2rem;
        }
        .button3 {
          border-radius: 50%;
          position: fixed;
          bottom: 5rem;
          left: 0.4rem;
          background-color: blue;
          height: 2rem;
          width: 2rem;
        }
        .box {
          margin: auto;
          width: 100%;
        }
        .section {
          font-family: monospace;
          font-size: 1.2em;
          display: block;
          margin: auto;
          width: 31rem;
        }

        @media (max-width: 600px) {
          .box {
            margin: auto;
            width: 100%;
          }
          .section {
            font-size: 1.1em;
            display: block;
            margin: auto;
            width: 20rem;
          }
          .img {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            margin: auto;
            height: 16rem;
            width: 19rem;
             {
              /* border: solid 1px black; */
            }
          }
          .img:hover {
          }
        }
      `}</style>
    </>
  )
}

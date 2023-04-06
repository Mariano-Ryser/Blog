import siteMetadata from '@/data/siteMetadata2'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

import { useState } from 'react'

export default function Projects2() {
  const initialState = 1
  const [gross, setGross] = useState(initialState)

  const grosse = () => {
    setGross(gross + 0.01)
  }

  const grosseOut = () => {
    setGross(gross - 0.01)
  }

  const tipografia = () => {
    var section = document.querySelectorAll < HTMLElement > 'section'
    for (let i = 0; i < section.length; i++) {
      section[i].style.fontSize = '1.3rem'
    }
  }

  const img = 'javaScript.jpeg'
  const img1 = 'htmlDomain.jpeg'
  const img2 = 'inputSystem.jpeg'
  const img3 = 'js1.jpeg'

  return (
    <>
      {/* <form>
      <input type='text' name='text'></input>
      <button onClick={text}></button>
    </form> */}

      <div className="box">
        <section className="section" style={{ fontSize: `${gross}` + 'rem' }}>
          Ahora escribimos un texto cualquiera para ver como se ve a la hora de leer en la pantalla
          del celular, los textos siguientes son sin sentido, solamente para rellenar los{' '}
          <b>componentes futuros</b> futuros.
        </section>
        <br></br>
        <section className="section" style={{ fontSize: `${gross}` + 'rem' }}></section>

        <section className="section" style={{ fontSize: `${gross}` + 'rem' }}>
          <h1>JavaScript Array methods</h1>
          <div className="img" style={{ backgroundImage: `url('/img/${img}')` }}></div>
        </section>

        <br></br>
      </div>

      {/* BOTONES GROSSE BUCHSTABE*/}
      <button className="button" onClick={tipografia}>
        Tipograf
      </button>
      <button className="button2" onClick={grosse}>
        Size+
      </button>
      <button className="button3" onClick={grosseOut}>
        Size-
      </button>

      <style jsx>{`
        .img {
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin: auto;
          height: 30rem;
          width: 32rem;
          transform: scale(1);
          transition: 0.2s;
        }
        .img:hover {
          transform: scale(1.2);
        }
        .button {
          position: fixed;
          top: 2rem;
          left: 0.4rem;
          background-color: white;
          height: 40px;
          width: 70px;
        }
        .button2 {
          position: fixed;
          top: 5rem;
          left: 0.4rem;
          background-color: white;
          height: 40px;
          width: 70px;
        }
        .button3 {
          position: fixed;
          top: 8rem;
          left: 0.4rem;
          background-color: white;
          height: 40px;
          width: 70px;
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
            width: 27rem;
          }
          .img {
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            margin: auto;
            height: 16rem;
            width: 21rem;
             {
              /* border: solid 1px black; */
            }
          }
          .img:hover {
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  )
}

import fetch from 'isomorphic-unfetch'
import { useState } from 'react'

const Home = ({ data }) => {
  const imagenes = data

  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * 12))
  }

  return (
    <>
      <div className="wrapper">
        <img
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          src={imagenes[0].image}
        />
        <div
          className="box"
          style={{
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            backgroundImage: `url(${imagenes[imageNumber].image})`,
          }}
          href=""
          onMouseMove={handleMouseMove}
        ></div>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100vw;
          height: 100vh;
        }
        img {
          width: 100%;
        }

        @media screen and (max-width: 667px) {
          .box {
            width: 100%;
          }
          img {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/landings`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

export default Home

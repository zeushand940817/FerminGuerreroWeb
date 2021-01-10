import fetch from 'isomorphic-unfetch'
import { useState } from 'react'

const Home = ({ data }) => {
  const imagenes = data
  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * 12))
  }

  const fadeProperties = {
    duration: 3000,
    canSwipe: false,
  }

  return (
    <>
      <div className="wrapper">
        <img
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
          }}
          src={imagenes[2].image}
        />
        <div
          className="box"
          style={{
            top: '0',
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
      <div className="homeMobile">
        {/* 
        <div className="containerMobile">
          {imagenes.map((image) => (
            <img src={image.image} />
          ))}
        </div> */}

        {imagenes.map((image) => (
          <img src={image.image} />
        ))}
      </div>

      <style jsx>{`
        .wrapper {
          width: 100vw;
          height: 100vh;
        }
        .homeMobile {
          display: none;
        }

        @media screen and (max-width: 667px) {
          .wrapper {
            display: none;
          }
          .homeMobile {
            display: block;
          }
          .containerMobile {
            height: 100%;
            height: 677px;
            border: 1px solid tomato;
          }
          img {
            width: 300px;
            height: 677px;
          }
          .box {
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top bottom;
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

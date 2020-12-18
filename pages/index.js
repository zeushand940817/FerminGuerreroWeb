import fetch from 'isomorphic-unfetch'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import { useState } from 'react'

const Home = ({ data }) => {
  const imagenes = data
  // console.log(imagenes[0].image, 'SOY LA IMAGE')

  const imageBack = imagenes[19].image
 
  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * 12))
  }

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            width: '100vw',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
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
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        img {
          width: 100%;
        }
        h1 {
          display: flex;
          text-align: center;
          justify-content: center;
          font-size: 40px;
          margin-top: 50px;
        }
      `}</style>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/landings`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

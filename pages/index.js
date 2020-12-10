import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'
import landings from 'database/landings'

const Home = ({ data }) => {
  const imagenes = data
  console.log(imagenes[0].image, 'SOY IMAGES')

  return (
    <>
      <div className="wrapper">
        <img src={imagenes[0].image} />
      </div>

      <style jsx>{`
        .wrapper {
          padding: 40px 10px 0px 10px;
          width: 100%;
          height: 100%;
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
  console.log(data, 'data')

  return {
    props: {
      data: data,
    },
  }
}

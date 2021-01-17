import fetch from 'isomorphic-unfetch'
import { useState } from 'react'
import FooterHome from 'components/FooterHome'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Home = ({ data }) => {
  const imagenes = data
  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * 24))
  }

  const arrMobile = imagenes.slice(23)

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 677 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 677, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState
    return (
      <li
        style={{
          background: active ? 'white' : 'transparent',
          mixBlendMode: 'difference',
          borderRadius: '100px',
          marginBottom: '20px',
          marginRight: '5px',
          height: '16px',
          border: '1px solid white',
        }}
      >
        <button
          style={{
            background: 'transparent',
            mixBlendMode: 'difference',
            borderRadius: '100px',
            outline: 'none',
            border: 'none',
            height: '16px',
          }}
          onClick={() => onClick()}
        />
      </li>
    )
  }

  return (
    <>
      <div className="wrapper">
        <img
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: '0',
          }}
          src={imagenes[3].image}
        />
        <div
          className="box"
          style={{
            top: '0',
            width: '100vw',
            height: '100vh',
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
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          swipeable={true}
          customTransition="transform 300ms ease-in-out"
          draggable={false}
          autoPlay
          arrows={false}
          showDots={true}
          customDot={<CustomDot />}
        >
          {arrMobile.map((elem, key) => (
            <img className="imageSlider" src={elem.image} key={elem.id} />
          ))}
        </Carousel>
      </div>
      <FooterHome />

      <style jsx>{`
        .wrapper {
          width: 100vw;
          height: 100vh;
        }
        .homeMobile {
          display: none;
        }

        .mobileOnly {
          display: none;
        }

        .box {
          height: 100%;
        }

        .carousel-with-custom-dots {
          margin-top: 100px;
          padding-bottom: 100px;
        }
        .custom-dot {
          border: none;
          outline: none;
        }
        .custom-dot--active {
          transform: scale(1.3);
          outline: auto;
        }
        @media screen and (max-width: 667px) {
          .wrapper {
            display: none;
          }

          .homeMobile {
            display: block;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .imageSlider {
            height: 100vh;
            top: 0;
          }
        }

        @media screen and (max-width: 1024px) {
          .wrapper {
            height: 100vh;
            width: 100vw;
          }

          .homeMobile {
            display: block;
            margin-top: -25px;
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

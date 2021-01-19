import { useState } from 'react'
import Footer from 'components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { getLandingData } from '../utils/getData'

const Home = ({ dataParse }) => {
  const mobileImages = dataParse.mobile
  const desktopImages = dataParse.desktop
  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * desktopImages.length))
  }

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
          src={desktopImages[3]}
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
            backgroundImage: `url(${desktopImages[imageNumber]})`,
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
          {mobileImages.map((image, key) => (
            <img className="imageSlider" src={image} key={`${key} ${image}`} />
          ))}
        </Carousel>
      </div>
      <Footer component="home" />

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
  const dataJson = await getLandingData()
  return {
    props: {
      dataParse: dataJson,
    },
  }
}

export default Home

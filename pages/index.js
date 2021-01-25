import { useState } from 'react'

//Data fetching
import { getLandingData } from '../utils/getData'

//components
import Footer from 'components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

//media queries
import device from 'utils/media-queries'

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

  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        style={{
          background: active ? 'white' : 'transparent',
          mixBlendMode: 'difference',
          borderRadius: '100px',
          marginBottom: '20px',
          marginRight: '5px',
          width: '15px',
          height: '15px',
          border: '2px solid white',
          borderRadius: '10px',
          marginBottom: '80px',
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
      <div className="hero" id="#home">
        <img
          className="backgroundImage"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: '0',
          }}
          src={desktopImages[0].image}
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
          containerClass="carouselContainer"
          customDot={<CustomDot />}
          itemClass="carousel-item"
        >
          {mobileImages.map((image, key) => (
            <img
              style={{
                width: '100%',
                height: '100vh',
              }}
              src={image}
              key={`${key} ${image}`}
            />
          ))}
        </Carousel>
      </div>
      <Footer component="home" />

      <style jsx>{`
        .hero {
          display: none;
        }

        .homeMobile {
          height: 100%;
          display: block;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .carousel-with-custom-dots {
          margin-top: 100px;
        }
        .custom-dot {
          border: none;
          outline: none;
        }
        .custom-dot--active {
          transform: scale(1.3);
          outline: auto;
        }

        @media only Screen and ${device.tablet} {
          .hero {
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
        }
        @media only Screen and ${device.desktop} {
          .hero {
            display: block;
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

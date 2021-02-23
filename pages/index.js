import { useState } from 'react'
import Head from 'next/head'

//Data fetching
import { getLandingData } from '../utils/getData'

//components
import Footer from 'components/Footer'
import 'react-multi-carousel/lib/styles.css'
import MobileCarousel from 'components/MobileCarousel'

//Styles
import styles from 'styles/home.module.scss'

const Home = ({ dataParse }) => {
  const mobileImages = dataParse.mobile
  const desktopImages = dataParse.desktop
  const [imageNumber, setImageNumber] = useState(0)

  function handleMouseMove() {
    setImageNumber(Math.floor(Math.random() * desktopImages.length))
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Fermin Guerrero's graphic designer and typefase designer web/portfolio."
        />
      </Head>
      <div className={styles.hero} id="#home">
        <img
          style={{
            objectPosition: 'center',
            objectFit: 'cover',
            position: 'relative',
            width: '100%',
            height: '100%',
            top: '0',
          }}
          alt="graphic-design-image"
          src={desktopImages[1]}
        />
        <div
          className={styles.box}
          style={{
            top: '0',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            backgroundImage: `url(${desktopImages[imageNumber]})`,
          }}
          onMouseMove={handleMouseMove}
        ></div>
      </div>
      <div className={styles.homeMobile}>
        <MobileCarousel mobileImages={mobileImages} />
      </div>

      <Footer component="home" />
      <style jsx>{`
        .imageContainer {
          height: 100%;
          width: 100%;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: 'cover';
          object-position: 'center';
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

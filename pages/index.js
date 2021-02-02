import { useEffect, useState } from 'react'

//Data fetching
import { getLandingData } from '../utils/getData'
//components
import Footer from 'components/Footer'
//Styles
import styles from 'styles/home.module.scss'

const Home = ({ dataParse }) => {
  const desktopImages = dataParse.desktop
  const [current, setCurrent] = useState(0)
  const [mouse, setMouse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mouse) {
        setCurrent((current) => current + 1)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [mouse])

  function handleMouseOver(key) {
    setMouse(true)
    setCurrent(key)
  }

  function handleMouseOut() {
    setMouse(false)
  }

  return (
    <>
      <div className={styles.hero} id="#home">
        <div className={styles.image}>
          <img
            src={desktopImages[current]}
            alt={desktopImages[current]}
            loading="lazy"
          />
        </div>
        {desktopImages.map((image, key) => {
          return (
            <div
              key={key}
              style={{ width: `calc(100% / ${desktopImages.length})` }}
              onMouseOver={() => handleMouseOver(key)}
              onMouseOut={handleMouseOut}
            />
          )
        })}
      </div>

      <Footer component="home" />

      <style jsx>{`
        .imageContainer {
          height: 100%;
          width: 100%;
          border: 1px solid red;
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

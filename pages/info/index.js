import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

//Data fetching
import { getPressData } from 'utils/getData'

//Style
import styles from 'styles/info.module.scss'

//Media queries
import device from 'utils/media-queries'

//Dynamic imports / Components
const About = dynamic(() => import('@components/About'))
const Awards = dynamic(() => import('components/Awards'))
const Item = dynamic(() => import('../../components/Press/Item'))
const Contact = dynamic(() => import('components/Contact'))
const Exhibitions = dynamic(() => import('components/Exhibitions'))
const Footer = dynamic(() => import('components/Footer'))
const MobileSectionsMenu = dynamic(() =>
  import('components/MobileSectionsMenu')
)

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect()
  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function Info({ data }) {
  const articles = Object.values(data).map((element) => element)

  const [visibleSection, setVisibleSection] = useState()

  const sidenavRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const awardsRef = useRef(null)
  const pressRef = useRef(null)
  const exhibitionsRef = useRef(null)

  const sectionRefs = [
    { section: 'about', ref: aboutRef },
    { section: 'contact', ref: contactRef },
    { section: 'awards', ref: awardsRef },
    { section: 'press', ref: pressRef },
    { section: 'exhibitions', ref: exhibitionsRef },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(sidenavRef.current)
      const scrollPosition = window.scrollY + headerHeight

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele)
          return scrollPosition > offsetTop && scrollPosition < offsetBottom
        }
      })

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section)
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [visibleSection])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topSpacer}>
          <img className={styles.image} src="/aboutmepicture.jpg" />
        </div>
        <div className={styles.mobileSections}>
          <MobileSectionsMenu />
        </div>
        <div className={styles.content}>
          <div className={styles.sticky}>
            <div className={styles.header} ref={sidenavRef}>
              <button
                type="button"
                className={`{styles.header_link} ${
                  visibleSection === 'about' ? '{styles.selected}' : ''
                }`}
                onClick={() => {
                  scrollTo(aboutRef.current)
                }}
              >
                About
              </button>
              <button
                type="button"
                className={`{styles.header_link} ${
                  visibleSection === 'contact' ? '{styles.selected}' : ''
                }`}
                onClick={() => {
                  scrollTo(contactRef.current)
                }}
              >
                Contact
              </button>
              <button
                type="button"
                className={`{styles.header_link} ${
                  visibleSection === 'awards' ? '{styles.selected}' : ''
                }`}
                onClick={() => {
                  scrollTo(awardsRef.current)
                }}
              >
                Awards & Distinctions
              </button>
              <button
                type="button"
                className={`{styles.header_link} ${
                  visibleSection === 'press' ? '{styles.selected}' : ''
                }`}
                onClick={() => {
                  scrollTo(pressRef.current)
                }}
              >
                Research & Articles
              </button>
              <button
                type="button"
                className={`{styles.header_link} ${
                  visibleSection === 'exhibitions' ? '{styles.selected}' : ''
                }`}
                onClick={() => {
                  scrollTo(exhibitionsRef.current)
                }}
              >
                Exhibitions
              </button>
            </div>
          </div>

          <section className={styles.sectionInInfo} id="about" ref={aboutRef}>
            <About />
          </section>
          <section
            className={styles.sectionInInfo}
            id="contact"
            ref={contactRef}
          >
            <Contact />
          </section>
          <section className={styles.sectionInInfo} id="awards" ref={awardsRef}>
            <Awards />
          </section>
          <section className={styles.sectionInInfo} id="press" ref={pressRef}>
            <div className={styles.boxPress}>
              <div className={styles.pageWrapper}>
                <div className={styles.projectList}>
                  {articles.map((item, index) => (
                    <div key={item.id}>
                      <a
                        className="linkArticle"
                        href={item.url}
                        target="_blank"
                      >
                        <Item
                          href={item.url}
                          description={item.description}
                          description2={item.description2}
                          year={item.year}
                          index={index}
                          articles={articles}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section
            className={styles.sectionInInfo}
            id="exhibitions"
            ref={exhibitionsRef}
          >
            <Exhibitions />
          </section>
          <div className={styles.bottomSpacer} />
        </div>
        <div className={styles.footerDiv}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const press = await getPressData()
  return {
    props: {
      data: press,
    },
  }
}

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

//Data fetching
import {
  getArticlesData,
  getExhibitionsData,
  getPressData,
  getAwardsData,
  getOnlinePressData,
} from 'utils/getData'

//Media queries
import device from 'utils/media-queries'

//Dynamic imports / Components
const About = dynamic(() => import('components/About'))
const Awards = dynamic(() => import('components/Awards'))
const Item = dynamic(() => import('../../components/HoverImage/Item'))
const Contact = dynamic(() => import('components/Contact'))
const Exhibitions = dynamic(() => import('components/Exhibitions'))
const Footer = dynamic(() => import('components/Footer'))
const OnlinePress = dynamic(() => import('components/OnlinePress'))
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

export default function Info({
  data,
  pressData,
  exhibitions,
  awardsData,
  pressOnlineData,
}) {
  const articles = Object.values(data).map((element) => element)
  const press = Object.values(pressData).map((element) => element)

  const [visibleSection, setVisibleSection] = useState()

  const sidenavRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const awardsRef = useRef(null)
  const articlesRef = useRef(null)
  const exhibitionsRef = useRef(null)
  const pressRef = useRef(null)

  const sectionRefs = [
    { section: 'about', ref: aboutRef },
    { section: 'contact', ref: contactRef },
    { section: 'awards', ref: awardsRef },
    { section: 'articles', ref: articlesRef },
    { section: 'exhibitions', ref: exhibitionsRef },
    { section: 'press', ref: pressRef },
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
      <Head>
        <title>Info</title>
        <meta
          name="description"
          content="Fermin Guerrero's graphic designer and typefase designer information, contact, press, articles."
        />
      </Head>
      <div className="wrapper">
        <div className="topSpacer">
          <img
            className="image"
            src="/aboutmepicture.jpg"
            alt="image-info-graphic-designer"
          />
        </div>
        <div className="mobileAbout">
          <MobileSectionsMenu
            press={press}
            articles={articles}
            exhibitions={exhibitions}
            awardsData={awardsData}
            pressOnlineData={pressOnlineData}
          />
        </div>
        <div className="content">
          <div className="sticky">
            <div className="header" ref={sidenavRef}>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'about' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(aboutRef.current)
                }}
              >
                About
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'contact' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(contactRef.current)
                }}
              >
                Contact
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'press' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(pressRef.current)
                }}
              >
                Press
              </button>

              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'awards' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(awardsRef.current)
                }}
              >
                Awards & Distinctions
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'articles' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(articlesRef.current)
                }}
              >
                Research & Articles
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === 'exhibitions' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(exhibitionsRef.current)
                }}
              >
                Exhibitions
              </button>
            </div>
          </div>

          <section className="sectionInfo" id="about" ref={aboutRef}>
            <About />
          </section>
          <section className="sectionInfo" id="contact" ref={contactRef}>
            <Contact />
          </section>

          <section className="sectionInfo" id="press" ref={pressRef}>
            <div className="boxPress">
              <div className="pageWrapper">
                <div className="projectList">
                  <Grid item xs={12} container>
                    <Grid container direction="row">
                      <Grid item lg={2} />
                      <Grid item lg={2} />
                      <Grid item xs={3} lg={3}>
                        <Box
                          style={{
                            color: 'white',
                            marginBottom: '50px',
                            paddingTop: '50px',
                          }}
                        >
                          Print (selected):
                        </Box>
                      </Grid>
                      <Grid item xs={6} lg={4} />
                      <Grid item xs={1} lg={1} />
                    </Grid>
                  </Grid>

                  {press.map((item, index) => (
                    <div key={item.id}>
                      <Item
                        description={item.description}
                        description2={item.description2}
                        year={item.year}
                        index={index}
                        press={press}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Grid item xs={12} container>
              <Grid container direction="row">
                <Grid item lg={2} />
                <Grid item lg={2} />
                <Grid item xs={3} lg={3}>
                  <Box
                    style={{
                      color: 'white',
                      marginBottom: '35px',
                    }}
                  >
                    Online (selected):
                  </Box>
                </Grid>
                <Grid item xs={6} lg={4} />
                <Grid item xs={1} lg={1} />
              </Grid>
            </Grid>
            <OnlinePress pressOnlineData={pressOnlineData} />
          </section>

          <section className="sectionInfo" id="awards" ref={awardsRef}>
            <Awards awardsData={awardsData} />
          </section>
          <section className="sectionInfo" id="articles" ref={articlesRef}>
            <div className="boxPress">
              <div className="pageWrapper" style={{ paddingTop: '50px' }}>
                <div className="projectList">
                  {articles.map((item, index) => (
                    <div key={item.id}>
                      <a
                        className="linkArticle"
                        href={item.url}
                        target="_blank"
                      >
                        <Item
                          linkDescription={item.linkDescription}
                          url={item.url}
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
            className="sectionInfo"
            id="exhibitions"
            ref={exhibitionsRef}
          >
            <Exhibitions exhibitions={exhibitions} />
          </section>
          <div className="bottomSpacer" />
        </div>
        <div className="footerDiv">
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          padding: 40px 20px 0px 20px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          hyphens: auto;
        }
        .mobileAbout {
          display: block;
        }

        .image {
          width: 100%;
        }
        .header_link {
          display: none;
        }
        .header {
          display: none;
        }

        #about {
          display: none;
        }
        #contact {
          display: none;
        }

        #awards {
          display: none;
        }

        #articles {
          display: none;
        }
        #exhibitions {
          display: none;
        }
        #press {
          display: none;
        }
        .titlePress {
          padding-bottom: 35px;
          color: white;
        }
        @media only Screen and ${device.desktop} {
          .footerDiv {
            bottom: 0;
          }
          .wrapper {
            font-size: 20px;
            padding: 40px 20px 0px 20px;
          }

          .image {
            width: 100%;
          }

          .content {
            margin-top: 50px;
          }

          .topSpacer {
            height: auto;
          }

          .sticky {
            width: 100%;
            background-color: black;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            background-color: 'pink';
            font-size: bold;
          }

          .header_link {
            background-color: transparent;
            display: flex;
            justify-content: left;
            font-size: 20px;
            color: white;
            border: none;
            cursor: pointer;
            outline: none;
            padding: 0px;
            line-height: 1.4;
          }

          .selected {
            font-style: italic;
            font-weight: 700;
            color: white;
          }
          .section {
            background: transparent;
            height: auto;
            margin-top: 50px;
          }

          .linkArticle {
            outline: none;
            color: white;
          }

          #about {
            margin-top: 0px;
            display: block;
          }

          #contact {
            display: block;
          }

          #awards {
            display: block;
          }
          #press {
            display: block;
          }
          #articles {
            margin-top: 20px;
            display: block;
          }
          #exhibitions {
            display: block;
            height: auto;
          }

          .mobileAbout {
            display: none;
          }

          .pageWrapper {
            margin-top: 60px;
          }
          .footerDiv {
            bottom: 0;
          }
          .wrapper {
            font-size: 20px;
            padding: 40px 20px 0px 20px;
          }

          .image {
            width: 100%;
          }

          .content {
            margin-top: 50px;
          }

          .topSpacer {
            height: auto;
          }

          .bottomSpacer {
            height: 40vh;
          }

          .sticky {
            width: 100%;
            background-color: black;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }

          .header_link {
            background-color: transparent;
            display: flex;
            justify-content: left;
            font-size: 20px;
            color: white;
            border: none;
            cursor: pointer;
            outline: none;
          }

          .selected {
            font-style: normal;
            font-weight: 700;
            color: white;
          }
          .section {
            background: transparent;
            height: auto;
            margin-top: 50px;
          }

          .linkArticle {
            outline: none;
            color: white;
          }

          #about {
            margin-top: 0px;
            display: block;
          }

          #contact {
            display: block;
          }

          #awards {
            display: block;
          }

          #articles {
            margin-top: 20px;
            display: block;
          }
          #exhibitions {
            display: block;
          }

          .mobileAbout {
            display: none;
          }
          .mobileAbout {
            display: none;
          }
          .sticky {
            position: sticky;
            top: 50px;
            left: 0;
            right: 0;
            z-index: 10;
            width: 400px;
          }

          .header {
            background-color: transparent;
            display: flex;
            flex-direction: column;
            width: 400px;
          }

          #about {
            margin-top: -220px;
          }
          .titlePress {
            padding-bottom: 35px;
            color: white;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getArticlesData()
  const pressData = await getPressData()
  const exhibitions = await getExhibitionsData()
  const awardsData = await getAwardsData()
  const pressOnlineData = await getOnlinePressData()

  return {
    props: {
      data: articles,
      pressData,
      exhibitions,
      awardsData,
      pressOnlineData,
    },
  }
}

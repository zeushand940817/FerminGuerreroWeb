import { useRef, useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import Footer from 'components/Footer'

const About = dynamic(() => import('@components/About'))
const Awards = dynamic(() => import('components/Awards'))
const Item = dynamic(() => import('../../components/Press/Item'))
const Contact = dynamic(() => import('components/Contact'))
const MobileSectionsMenu = dynamic(() =>
  import('components/MobileSectionsMenu')
)
const Exhibitions = dynamic(() => import('components/Exhibitions'))
const PressMobile = dynamic(() => import('components/PressMobile'))

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
  const articles = data

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
      <div className="wrapper">
        <div className="topSpacer">
          <img className="image" src="/aboutmepicture.jpg" />
        </div>
        <div className="mobileAbout">
          <MobileSectionsMenu />
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
                  visibleSection === 'press' ? 'selected' : ''
                }`}
                onClick={() => {
                  scrollTo(pressRef.current)
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

          <div className="section" id="about" ref={aboutRef}>
            <About />
          </div>
          <div className="section" id="contact" ref={contactRef}>
            <Contact />
          </div>
          <div className="section" id="awards" ref={awardsRef}>
            <Awards />
          </div>
          <div className="section" id="press" ref={pressRef}>
            <div className="boxPress">
              <div className="pageWrapper">
                <div className="projectList">
                  {articles.map(
                    ({ url, id, description, year, description2 }, index) => (
                      <div key={id}>
                        <a className="linkArticle" href={url} target="_blank">
                          <Item
                            href={url}
                            description={description}
                            description2={description2}
                            year={year}
                            index={index}
                            articles={articles}
                          />
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="exhibitions" ref={exhibitionsRef}>
            <Exhibitions />
          </div>
          <div className="bottomSpacer" />
          <div className="footerDiv">
            <Footer />
          </div>
        </div>
      </div>

      <style jsx>{`
        .pageWrapper {
          padding-top: 60px;
        }
        .footerDiv {
          bottom: 0;
        }
        .wrapper {
          height: 100%;
          width: 100%;
          font-size: 20px;
          padding: 40px 20px 5px 20px;
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
          margin-top: 50px;
          width: 400px;
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
          font-style: italic;
          font-weight: bold;
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
          margin-top: -180px;
        }

        #exhibitions {
          height: 60vh;
        }
        .mobileAbout {
          display: none;
        }

        @media screen and (max-width: 677px) {
          .wrapper {
            padding: 0px 20px 0px 20px;
            height: 100%;
            width: 100%;
          }
          .mobileAbout {
            display: block;
          }

          .image {
            width: 90%;
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

          #press {
            display: none;
            font-size: 16;
          }
          #exhibitions {
            display: none;
            font-size: 16;
          }
        }

        @media screen and (max-width: 1024px) {
          .wrapper {
            height: 100%;
            width: 100%;
            padding: 0px 20px 0px 20px;
          }
          .section {
            background: transparent;
            height: auto;
            margin-top: 0px;
          }
          .image {
            width: 100%;
          }
          .mobileAbout {
            visibility: none;
          }
          .content {
            margin-top: 0px;
            display: block;
          }
          #exhibitions {
            height: 0px;
          }
          #awards {
            padding-top: 40px;
          }

          #press {
            padding-top: 40px;
          }

          #exhibitions {
            padding-top: 40px;
          }
          .bottomSpacer {
            height: 30vh;
          }
          .header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            background-color: 'pink';
          }
          .sticky {
            width: 100%;
            border-bottom: '1px solid white';
            background-color: black;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/press`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

import Link from 'next/link'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Footer from 'components/Footer'

export default function All({ data }) {
  const projects = data.sort(function (a, b) {
    return parseInt(b.year) - parseInt(a.year)
  })
  const videoMp4 = data.filter((elem) => elem.id === '31')
  const extractVideo = videoMp4[0].mp4Video

  return (
    <div className="wrapperAll">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter={3}>
          {projects.map((project, key) => (
            <Link
              key={project.id}
              href={`/projects/[slug]`}
              as={`/projects/${project.slug}`}
            >
              <a>
                <div className="containerAll">
                  {project.id == 31 ? (
                    <video
                      autoPlay
                      muted
                      loop
                      width="100%"
                      height="auto"
                      className="videoClass"
                    >
                      <source src={extractVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      className="imageAll"
                      alt={project.name}
                      src={project.image}
                    />
                  )}
                  <div className="middleAll">
                    <p className="textAll">{project.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Footer />

      <style jsx>{`
        .wrapperAll {
          width: 100%;
          padding: 40px 20px 0px 20px;
        }
        .imageAll {
          width: 100%;
          height: 100%;
          padding-right: 10px;
        }
        .videoClass {
          width: 100%;
          height: 100%;
          padding-right: 10px;
        }

        .containerAll {
          position: relative;
        }

        .containerAll:hover {
          opacity: 1;
          -webkit-animation: flash 1.5s;
          animation: flash 1.5s;
          font-weight: bold;
        }
        @-webkit-keyframes flash {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes flash {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 1;
          }
        }

        .containerAll:hover .videoClass {
          opacity: 1;
          -webkit-animation: flash 1.5s;
          animation: flash 1.5s;
        }

        .textAll {
          font-size: 20px;
          color: white;
          padding-bottom: 15px;
        }
        @media screen and (max-width: 667px) {
          .wrapperAll {
            padding: 10px;
          }
          .imageAll {
            padding: 0px;
          }
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/projects`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

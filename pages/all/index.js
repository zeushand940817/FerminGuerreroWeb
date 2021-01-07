import Link from 'next/link'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function All({ data }) {
  const projects = data
  const videoMp4 = data.filter((elem) => elem.id === '31')
  const extractVideo = videoMp4[0].mp4Video

  return (
    <div className="wrapperAll">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter={4}>
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
                      className="imagen"
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

      <style jsx>{`
        .wrapperAll {
          width: 100%;
          padding: 40px 0px 0px 0px;
        }

        @media screen and (max-width: 667px) {
          .imageContainer {
            column-count: 1;
          }
        }

        .containerAll {
          position: relative;
        }
        .containerAll:hover img {
          opacity: 0.5;
          filter: grayscale(100%);
        }

        .containerAll:hover .videoClass {
          opacity: 0.5;
          filter: grayscale(100%);
        }
        .containerAll:hover .middleAll {
          opacity: 1;
        }
        .imagen {
          width: 100%;
          padding-left: 10px;
          padding-bottom: 5px;
          width: 100%;
          height: 100%;
        }
        .middleAll {
          padding: 20px;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          opacity: 0;
          text-align: center;
          font-weight: bold;
          transition: ease 0.5s all;
        }

        .textAll {
          font-size: 20px;
          color: white;
          padding: 5px 10px 25px 10px;
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

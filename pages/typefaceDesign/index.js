import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function TypefaceDesign({ data }) {
  const projectsFilter = data
    .sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year)
    })
    .filter((project) => project.type === 'typeface')
    .map(({ id, image, name, slug, year }) => ({ id, image, name, slug, year }))

  const videoMp4 = data.filter((elem) => elem.id === '31')
  const extractVideo = videoMp4[0].mp4Video
  return (
    <>
      <div className="mainWrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter={4}>
            {projectsFilter.map((projectFilter, key) => (
              <Link
                key={projectFilter.id}
                href={`/projects/[slug]`}
                as={`/projects/${projectFilter.slug}`}
              >
                <a>
                  <div className="container">
                    {projectFilter.id == 31 ? (
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
                        alt={projectFilter.name}
                        src={projectFilter.image}
                      />
                    )}
                    <div className="middle">
                      <p className="text">{projectFilter.name}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <style jsx>{`
          .mainWrapper {
            width: 100%;
            padding: 40px 0px 0px 0px;
          }
          .imagen {
            padding-left: 10px;
            padding-bottom: 4px;
            width: 100%;
            height: 100%;
          }

          .container {
            position: relative;
          }
          .middle {
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
          .container:hover img {
            opacity: 0.5;
            filter: grayscale(100%);
          }

          .container:hover .videoClass {
            opacity: 0.5;
            filter: grayscale(100%);
          }
          .container:hover .middle {
            opacity: 1;
          }
          .text {
            font-size: 20px;
            color: white;
            padding: 5px 10px 25px 10px;
          }

          @media screen and (max-width: 667px) {
            .mainWrapper {
              padding: 10px;
            }
            .imagen {
              padding: 0px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/projects`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

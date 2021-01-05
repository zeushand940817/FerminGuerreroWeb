import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
    overflowY: 'scroll',
  },
})

export default function GraphicDesign({ data }) {
  const classes = useStyles()

  const projectsFilter = data
    .filter((project) => project.type === 'graphic')
    .map(({ id, image, name, slug }) => ({ id, image, name, slug }))

  const videoMp4 = data.filter((elem) => elem.id === '31')
  const extractVideo = videoMp4[0].mp4Video

  return (
    <>
      <div className="imageContainer">
        <div className="col">
          {projectsFilter.map((projectFilter, key) => (
            <Link
              key={projectFilter.id}
              href={`/projects/[slug]`}
              as={`/projects/${projectFilter.slug}`}
            >
              <a>
                <div className="container">
                  {projectFilter.id == 31 ? (
                    <video autoPlay muted loop width="100%" height="auto">
                      <source src={extractVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      layout="responsive"
                      width="100%"
                      height="100%"
                      className="image"
                      loading="lazy"
                      src={projectFilter.image}
                      alt={projectFilter.name}
                    />
                  )}
                  <div className="middle">
                    <p className="text">{projectFilter.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <style jsx>{`
          .imageContainer {
            max-width: 100%;
            height: auto;
            padding: 40px 20px 0px 20px;
            column-count: 3;
          }

          .container {
            position: relative;
            width: 100%;
            padding: 10px;
          }

          .col {
            height: auto;
          }
          .image {
            object-fit: cover;
            object-position: center;
            opacity: 1;
            display: inline-block;
            transition: 0.5s ease;
            backface-visibility: hidden;
            padding: 20px;
          }

          .middle {
            padding: 20px;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            border-top: 1px solid white;
            opacity: 0;
            text-align: left;
            font-weight: bold;
            transition: ease 0.5s all;
          }
          .container:hover .image {
            opacity: 0.5;
            transition: ease 0.5s all;
            filter: grayscale(100%);
            padding: 20px;
          }
          .container:hover .middle {
            padding: 20px;
            opacity: 1;
          }

          .text {
            font-size: 20px;
            color: white;
            padding: 5px 10px 25px 10px;
          }
          @media screen and (max-width: 667px) {
            .imageContainer {
              max-width: 100%;
              height: auto;
              padding: 40px 20px 0px 20px;
              display: flex;
              flex-direction: column;
            }
          }
          @media screen and (max-width: 1024px) {
            .imageContainer {
              max-width: 100%;
              height: auto;
              padding: 40px 20px 0px 20px;
              column-count: 2;
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

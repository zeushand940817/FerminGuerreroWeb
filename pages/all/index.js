import Link from 'next/link'

//Componets
import Footer from 'components/Footer'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Styles
import { makeStyles } from '@material-ui/core/styles'

//Data fetching
import { getProjectsData } from 'utils/getData'

//Media queries
import device from 'utils/media-queries'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  label: {
    ['@media (max-width:677px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export default function All({ data, extractVideo }) {
  const classes = useStyles()
  return (
    <div className="mainWrapper">
      <div className={classes.root}>
        <ImageList
          variant="masonry"
          cols={3}
          gap={13}
          className={classes.label}
        >
          {data.map((project) => (
            <Link
              key={project.id}
              href={`/projects/[slug]`}
              as={`/projects/${project.slug}`}
            >
              <a>
                <div className="container">
                  <ImageListItem key={project.id}>
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
                    <div className="text">
                      <p>{project.name}</p>
                    </div>
                  </ImageListItem>
                </div>
              </a>
            </Link>
          ))}
        </ImageList>
      </div>

      <Footer />
      <style jsx>{`
        .mainWrapper {
          width: 100%;
          padding: 40px 15px 0px 15px;
        }
        .imagen {
          padding-right: 0px;
        }
        .videoClass {
          padding-right: 0px;
        }

        .container:hover {
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

        .container:hover .videoClass {
          opacity: 1;
          -webkit-animation: flash 1.5s;
          animation: flash 1.5s;
        }

        .text {
          font-size: 20px;
          color: white;
          padding-top: 20px;
          padding-bottom: 25px;
          line-height: 18px;
        }

        @media only Screen and ${device.tablet} {
          .mainWrapper {
            padding: 30px 20px 0px;
          }
          .text {
            font-size: 18px;
            color: white;
          }
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const videoMp4 = data.filter((elem) => elem.id === 31)
  const extractVideo = videoMp4[0].mp4Video
  return {
    props: {
      data,
      extractVideo,
    },
  }
}

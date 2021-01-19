import { makeStyles } from '@material-ui/core/styles'

//Components
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Data fetching
import { getPathTags, getProjectsData } from 'utils/getData'

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
  tagWrapper: {
    width: '100%',
    padding: '30px 20px 0px',
    ['@media (max-width:677px)']: {
      padding: '20px 15px 0px',
    },
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  videoClass: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: '20px',
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '25px',
  },
})

export default function Animation({ data, path }) {
  const classes = useStyles()
  const animation = data.filter(
    (project) => project.tags && project.tags.includes(path)
  )

  return (
    <>
      <div className={classes.tagWrapper}>
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={13}
            className={classes.label}
          >
            {animation.map((elem) => (
              <div className="container">
                <ImageListItem key={elem.id}>
                  {elem.image && (
                    <img
                      className={classes.imagen}
                      alt="graphic-design-photo"
                      src={elem.image}
                    />
                  )}
                  {elem.mp4 && (
                    <video
                      autoPlay
                      muted
                      loop
                      width="100%"
                      height="auto"
                      className={classes.videoClass}
                    >
                      <source src={elem.mp4Video} type="video/mp4" />
                    </video>
                  )}
                  <div className={classes.text}>
                    <p>{elem.name}</p>
                  </div>
                </ImageListItem>
              </div>
            ))}
          </ImageList>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPathTags()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const path = params.tag
  const data = await getProjectsData()
  return {
    props: {
      data,
      path,
    },
  }
}

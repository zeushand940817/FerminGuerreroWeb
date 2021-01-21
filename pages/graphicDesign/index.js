import Link from 'next/link'

//Components
import Footer from 'components/Footer'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/pages.module.scss'

//Data fetching
import { getProjectsData } from 'utils/getData'

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

export default function GraphicDesign({ data, extractVideo }) {
  const classes = useStyles()
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={13}
            className={classes.label}
          >
            {data.map((projectFilter) => (
              <Link
                key={projectFilter.id}
                href={`/projects/[slug]`}
                as={`/projects/${projectFilter.slug}`}
              >
                <a>
                  <div className={styles.container}>
                    <ImageListItem key={projectFilter.id}>
                      {projectFilter.id == 31 ? (
                        <video
                          autoPlay
                          muted
                          loop
                          width="100%"
                          height="auto"
                          className={styles.videoClass}
                        >
                          <source src={extractVideo} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          className={styles.imagen}
                          alt={projectFilter.name}
                          src={projectFilter.image}
                        />
                      )}
                      <div className={styles.text}>
                        <p>{projectFilter.name}</p>
                      </div>
                    </ImageListItem>
                  </div>
                </a>
              </Link>
            ))}
          </ImageList>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const filteredData = data.filter((element) => element.type === 'graphic')
  const videoMp4 = data.filter((elem) => elem.id === 31)
  const extractVideo = videoMp4[0].mp4Video
  return {
    props: {
      data: filteredData,
      extractVideo,
    },
  }
}

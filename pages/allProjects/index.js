import Link from 'next/link'

//Componets
import Footer from 'components/Footer'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export default function All({ data, extractVideo }) {
  const classes = useStyles()
  return (
    <div className={styles.mainWrapper}>
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
                <div className={styles.container}>
                  <ImageListItem key={project.id}>
                    {project.id == 31 ? (
                      <video
                        preload="none"
                        playsinline
                        autoPlay
                        muted
                        loop
                        width="100%"
                        height="auto"
                        className={classes.videoClass}
                      >
                        <source src={extractVideo} type="video/mp4" />
                      </video>
                    ) : (
                      <LazyLoadImage
                        className={styles.imagen}
                        alt={project.name}
                        src={project.image}
                      />
                    )}
                    <div className={styles.text}>
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
    </div>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const videoMp4 = data.filter((elem) => elem.id === 31)
  const extractVideo = videoMp4[0].mp4Gallery
  return {
    props: {
      data,
      extractVideo,
    },
  }
}

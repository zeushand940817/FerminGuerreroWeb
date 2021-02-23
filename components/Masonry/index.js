import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import styles from 'styles/pages.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const useStyles = makeStyles({
  label: {
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

const Masonry = ({ data, extractVideo }) => {
  const classes = useStyles()
  return (
    <ImageList variant="masonry" cols={3} gap={13} className={classes.label}>
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
  )
}
export default Masonry

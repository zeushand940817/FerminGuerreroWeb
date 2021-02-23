import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'

//Components
import Grid from '@material-ui/core/Grid'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/project.module.scss'

const useStyles = makeStyles({
  imageList: {
    width: '100%',
    height: '100%',
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
}

const ImageGallery = ({ element }) => {
  const classes = useStyles()

  return (
    <ImageList
      gap={13}
      variant="quilted"
      cols={4}
      rowHeight="auto"
      className={classes.imageList}
    >
      {Object.values(element.sources).map((source) => {
        return (
          <ImageListItem
            key={element.id}
            cols={source.cols}
            rows={source.rows}
            className={styles.imageListItem}
          >
            {source.type === 'img' ? (
              <LazyLoadImage
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src={source.img}
                alt="graphic-design"
                srcSet={srcset(source.img, 121, source.rows, source.cols)}
              />
            ) : (
              <LazyLoad>
                <video
                  autoplay
                  muted
                  loop
                  playsinline
                  webkit-playsinline
                  controls
                  controlsList="nofullscreen"
                  className={styles.video}
                  poster={source.poster}
                >
                  <source
                    src={source.url}
                    srcSet={srcset(source.url, 121, source.rows, source.cols)}
                  />
                </video>
              </LazyLoad>
            )}
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default ImageGallery

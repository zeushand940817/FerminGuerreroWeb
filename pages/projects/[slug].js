import Link from 'next/link'
import Image from 'next/image'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/project.module.scss'

//Components
import Footer from 'components/Footer'
import Grid from '@material-ui/core/Grid'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Data fetching
import { getPaths, getProject } from 'utils/getData'

const useStyles = makeStyles({
  imageList: {
    width: '100%',
    height: '100%',
    ['@media (max-width:677px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
}

const Projects = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div className={styles.container}>
        {data.map((element) => {
          return (
            <>
              <Grid
                container
                style={{
                  position: 'relative',
                  height: '900px',
                  width: '100%',
                }}
              >
                {element.horizontal ? (
                  <Image
                    layout="fill"
                    className={styles.mainImage}
                    src={element.image}
                  />
                ) : (
                  <Image
                    layout="fill"
                    className={styles.mainImage}
                    src={element.img1}
                  />
                )}
                {element.mp4 && (
                  <video
                    preload="none"
                    playsinline
                    autoPlay
                    muted
                    loop
                    controls
                    width="100%"
                    height="auto"
                  >
                    <source src={element.mp41} type="video/mp4" />
                  </video>
                )}
              </Grid>

              <Grid container>
                <div className={styles.gridContainer}>
                  <Grid item xs={12} lg={2}>
                    <div className="name">{element.name}</div>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4}>
                    <div className={styles.yearandtags}>
                      <p>{element.year}</p>
                      <div className={styles.tagName}>
                        {element.tags &&
                          element.tags.map((tag) => {
                            const transformName = tag.replace('-', ' ')
                            return (
                              <>
                                <Link href={`/tag/${tag}`}>
                                  <a className={styles.tagLink}>
                                    <u>{transformName}</u>
                                  </a>
                                </Link>{' '}
                              </>
                            )
                          })}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <div className={styles.description}>
                      {element.description}{' '}
                      {element.urlDescription && (
                        <a href={element.urlDescription} target="_blank">
                          <u>here.</u>
                        </a>
                      )}
                    </div>
                  </Grid>
                </div>
              </Grid>

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
                    >
                      {source.type === 'img' ? (
                        <img
                          src={source.img}
                          alt="image-project"
                          srcSet={srcset(
                            source.img,
                            121,
                            source.rows,
                            source.cols
                          )}
                        />
                      ) : (
                        <div className={styles.videoContainer}>
                          <video
                            autoPlay
                            muted
                            loop
                            controls
                            className={styles.video}
                            src={source.url}
                            srcSet={srcset(
                              source.url,
                              121,
                              source.rows,
                              source.cols
                            )}
                          />
                        </div>
                      )}
                    </ImageListItem>
                  )
                })}
              </ImageList>
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPaths()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params.slug
  const data = await getProject(path)
  return {
    props: {
      data,
    },
  }
}

export default Projects

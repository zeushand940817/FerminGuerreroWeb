import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/project.module.scss'

//Components
import Footer from 'components/Footer'
import Grid from '@material-ui/core/Grid'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import CircularProgress from 'components/CircularProgress'

//Lazyloading
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'

//Data fetching
import { getPaths, getProject } from 'utils/getData'

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

const Projects = ({ data }) => {
  const classes = useStyles()
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
        <CircularProgress />
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>
        {data.map((element) => {
          return (
            <>
              {element.mp4 ? (
                <video
                  loop
                  autoPlay
                  muted
                  playsinline
                  webkit-playsinline
                  controlsList="nofullscreen"
                  className={styles.mainVideo}
                >
                  <source src={element.mp4Slug} type="video/mp4" />
                </video>
              ) : (
                <div>
                  <img
                    alt="graphic-design"
                    src={element.imageSlag}
                    width="800px"
                    height="534px"
                    className={styles.mainImage}
                  />
                </div>
              )}

              <Grid container>
                <div className={styles.gridContainer}>
                  <Grid item xs={12} lg={2}>
                    <div className={styles.name}>{element.name}</div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={4}
                    className={styles.tagYearContainer}
                  >
                    <div>
                      <p>{element.year}</p>
                      {element.credits && (
                        <p className={styles.middleText}>{element.credits}</p>
                      )}

                      {element.externalLinkBrick && (
                        <p className={styles.middleText}>
                          Get Brick at{' '}
                          <a
                            className={styles.tagLink}
                            href={element.externalLinkBrick}
                          >
                            <u>{element.nameExternalLink}</u>
                          </a>
                        </p>
                      )}

                      {element.externalLinkThesaurus && (
                        <p className={styles.middleText}>
                          Get Thesaurus at{' '}
                          <a
                            className={styles.tagLink}
                            href={element.externalLinkThesaurus}
                          >
                            <u>{element.nameExternalLink}</u>
                          </a>
                        </p>
                      )}
                    </div>
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
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <div className={styles.description}>
                      {element.description1 && <p>{element.description1}</p>}
                      {element.description2 && <p>{element.description2}</p>}
                      {element.description3 && <p>{element.description3}</p>}
                      {element.description3 && (
                        <span>{element.description4}</span>
                      )}{' '}
                      <span>
                        {element.urlDescription && (
                          <a
                            className={styles.tagLink}
                            href={element.urlDescription}
                            target="_blank"
                          >
                            <u>here.</u>
                          </a>
                        )}
                      </span>
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
                          srcSet={srcset(
                            source.img,
                            121,
                            source.rows,
                            source.cols
                          )}
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
                              srcSet={srcset(
                                source.url,
                                121,
                                source.rows,
                                source.cols
                              )}
                            />
                          </video>
                        </LazyLoad>
                      )}
                    </ImageListItem>
                  )
                })}
              </ImageList>
            </>
          )
        })}
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPaths()
  return { paths, fallback: true }
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

import Grid from '@material-ui/core/Grid'
// import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import Link from 'next/link'
import Footer from 'components/Footer'
import { getPaths, getProject } from 'utils/getData'

const useStyles = makeStyles({
  root: {
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
      <div className="container">
        {data.map((element) => {
          return (
            <>
              <Grid container>
                {element.horizontal ? (
                  <img className="mainImage" src={element.image} />
                ) : (
                  <img className="mainImage" src={element.img1} />
                )}
                {element.mp4 && (
                  <video autoPlay muted loop width="100%" height="auto">
                    <source src={element.mp41} type="video/mp4" />
                  </video>
                )}
              </Grid>

              <Grid container>
                <div className="gridContainer">
                  <Grid item xs={12} lg={2}>
                    <div className="name">{element.name}</div>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4}>
                    <div className="yearandtags">
                      <p>{element.year}</p>
                      <p className="tagName">
                        {element.tags &&
                          element.tags.map((tag) => {
                            console.log({ tag })
                            const transformName = tag.replace('-', ' ')
                            return (
                              <>
                                <Link href={`/tag/${tag}`}>
                                  <a>
                                    <u>{transformName}</u>
                                  </a>
                                </Link>{' '}
                              </>
                            )
                          })}
                      </p>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={6}>
                    <div className="description">
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
                className={classes.root}
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
                        <div className="videoContainer">
                          <video
                            autoPlay
                            muted
                            loop
                            className="video"
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

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          font-size: 20px;
          padding: 40px 20px 0px;
          margin-bottom: 30px;
          color: white;
        }
        .gridContainer {
          display: flex;
          flex-direction: row;
          height: auto;
          width: 100%;
        }

        .mainImage {
          width: 100%;
          height: auto;
        }

        .name {
          display: flex;
          flex-direction: row;
          margin-top: 1em;
        }

        .yearandtags {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 1em;
        }

        .goBack {
          text-align: right;
          margin: 30px;
        }

        .imageList {
          width: 500px;
          height: 450px;
        }

        .imagen {
          object-fit: cover;
          object-position: center;
        }

        .video {
          width: 695px;
          height: auto;
          object-fit: cover;
          object-position: center;
        }

        .description {
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 6.5px;
        }

        .tagStyle {
          background-color: transparent;
          border: none;
          font-size: 18px;
          color: white;
          cursor: pointer;
          outline: none;
        }

        a {
          color: white;
          text-decoration: none;
        }

        /* Media Queries */

        @media screen and (max-width: 667px) {
          .container {
            width: 100%;
            height: 100%;
            font-size: 20px;
            padding: 40px 10px 0px;
            margin-bottom: 30px;
            color: white;
          }
          .gridContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .yearandtags {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 10px;
          }
          .name {
            display: flex;
            flex-direction: row;
            margin-top: 1em;
            padding-left: 10px;
          }
          .imageList {
            display: inline-block;
            border: 2px solid pink;
            width: auto;
            height: auto;
          }
          .video {
            width: 335px;
            height: 335px;
            object-fit: cover;
            object-position: center;
          }

          .tagName {
            display: flex;
            flex-direction: column;
          }

          .description {
            margin-top: 1em;
            margin-bottom: 1em;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        @media screen and (max-width: 1024px) {
          .container {
            width: 100%;
            height: 100%;
            font-size: 20px;
            padding: 40px 10px 0px;
            margin-bottom: 30px;
            color: white;
          }
          .gridContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .yearandtags {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 10px;
          }
          .name {
            display: flex;
            flex-direction: row;
            margin-top: 1em;
            padding-left: 10px;
          }
          .imageList {
            display: inline-block;
            width: auto;
            height: auto;
          }
          .video {
            display: inline-block;
            width: 359px;
            height: 359px;
            object-fit: cover;
            object-position: center;
          }
        }
      `}</style>
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

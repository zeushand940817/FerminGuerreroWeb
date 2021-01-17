import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'
// import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import Link from 'next/link'
import Footer from 'components/Footer'

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
  const sources = data.sources
  const classes = useStyles()
  const tags = data.tags

  return (
    <>
      <div className="container">
        <Grid container>
          {data.horizontal && <img className="mainImage" src={data.image} />}
          {!data.horizontal && <img className="mainImage" src={data.img1} />}
          {data.mp4 && (
            <video autoPlay muted loop width="100%" height="auto">
              <source src={data.mp41} type="video/mp4" />
            </video>
          )}
        </Grid>

        <Grid container>
          <div className="gridContainer">
            <Grid item xs={12} lg={2}>
              <div className="name">{data.name}</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <div className="yearandtags">
                <p>{data.year}</p>
                <p className="tagName">
                  {tags &&
                    tags.map((tag) => (
                      <span>
                        {tag > 0 ? tag + ' , ' : ' '}
                        {tag == 'Visual Identity' && (
                          <Link
                            href="/tags/VisualIdentity"
                            as="/tags/visual-identity"
                          >
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Editorial' && (
                          <Link href="/tags/Editorial">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Photography' && (
                          <Link href="/tags/Photography">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Animation' && (
                          <Link href="/tags/Animation">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Cover Design' && (
                          <Link href="/tags/CoverDesign">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Illustration' && (
                          <Link href="/tags/Illustration">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Packaging' && (
                          <Link href="/tags/Packaging">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                        {tag == 'Poster' && (
                          <Link href="/tags/Poster">
                            <a>
                              <u>{tag}</u>
                            </a>
                          </Link>
                        )}
                      </span>
                    ))}
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <div className="description">
                {data.attributes.description}{' '}
                {data.attributes.urlDescription && (
                  <a href={data.attributes.urlDescription} target="_blank">
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
          {Object.values(sources).map((source) => {
            return (
              <ImageListItem
                key={data.id}
                cols={source.cols}
                rows={source.rows}
              >
                {source.type === 'img' ? (
                  <img
                    src={source.img}
                    alt="image-project"
                    srcSet={srcset(source.img, 121, source.rows, source.cols)}
                  />
                ) : (
                  <div className="videoContainer">
                    <video
                      autoPlay
                      muted
                      loop
                      className="video"
                      src={source.url}
                      srcSet={srcset(source.url, 121, source.rows, source.cols)}
                    />
                  </div>
                )}
              </ImageListItem>
            )
          })}
        </ImageList>
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
        }

        @media screen and (max-width: 1024px) {
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
  const { API_URL } = process.env
  const req = await fetch(`${API_URL}/api/projects`)
  const data = await req.json()

  const paths = data.map((element) => ({
    params: { slug: element.slug },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { API_URL } = process.env
  const req = await fetch(`${API_URL}/api/projects/${params.slug}`)
  const data = await req.json()
  return {
    props: {
      data: data,
    },
  }
}

export default Projects

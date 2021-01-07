import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'
//import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

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
        {/* <GoBack/>  */}
        <Grid container>
          <div className="gridContainer">
            <Grid item xs={12} lg={2}>
              <div className="name"> {data.name}</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <div className="yearandtags">
                <p>{data.year}</p>
                <p>
                  <u>Tags:</u>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <div className="description">{data.attributes.description}</div>
            </Grid>
          </div>
        </Grid>

        <ImageList
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
                    alt="image-project "
                    srcSet={srcset(source.img, 121, source.rows, source.cols)}
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    className={classes.video}
                    src={source.url}
                  />
                )}
              </ImageListItem>
            )
          })}
        </ImageList>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          font-size: 20px;
          padding: 40px 10px 0px 10px;
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
          objectfit: cover;
          object-position: center;
          width: 703px;
          height: auto;
        }
        .description {
          display: flex;
          height: auto;
          flex-wrap: wrap;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 10px;
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
            border: 2px solid pink;
            width: auto;
            height: auto;
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
  return { paths, fallback: false }
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

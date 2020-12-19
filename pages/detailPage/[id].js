import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'
import GoBack from 'components/GoBack'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
  },
  imagen: {
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
}

export default function DetailPage({ data }) {
  const images = data.images
  const video = data.videoList

  console.log(video, 'SOY VIDEO LIST')

  const classes = useStyles()

  return (
    <>
      <div className="container">
        <Grid container lg={12}>
          {data.horizontal === true ? (
            <img className="mainImage" src={data.image} />
          ) : (
            <img className="mainImage" src={data.img1} />
          )}
        </Grid>
        {/* <GoBack/>  */}
        <Grid container lg={12}>
          <div className="gridContainer">
            <Grid item xs={12} lg={2}>
              <div className="name"> {data.name}</div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <div className="yearandtags">
                <p>{data.year}</p>
                <p>
                  <u>Tags:</u> Poster, Illustration, Visual Identity
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} lg={6}>
              <div className="description">{data.attributes.description}</div>
            </Grid>
          </div>
        </Grid>

        <ImageList
          gap={12}
          variant="quilted"
          cols={4}
          rowHeight="auto"
          className={classes.root}
        >
          {Object.values(images).map((image) => (
            <ImageListItem cols={image.cols || 1} rows={image.rows || 1}>
              <img
                srcSet={srcset(image.img, 121, image.rows, image.cols)}
                alt=""
                className={classes.imagen}
              />

              {/* <video autoplay width="500px" height="500px">
                <source src={video[0]} type="video/mp4" />
              </video> */}
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          font-size: 20px;
          padding: 40px 10px 0px 10px;
          margin-bottom: 30px;
        }
        .gridContainer {
          display: flex;
          flex-direction: row;
          height: auto;
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

        .description {
          display: flex;
          height: auto;
          flex-wrap: wrap;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 10px;
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
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { id } = context.params
  const res = await fetch(`${API_URL}/api/projects/${id}`)
  const data = await res.json()
  console.log(data, 'data')
  return {
    props: {
      data: data,
    },
  }
}

import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'
import GoBack from 'components/GoBack'
// import Tags from 'components/Tags'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 450,
    ['@media screen and (max-width:677px)']: {
      border: '3px solid red',
    },
  },
  // '&.MuiImageListRoot': {
  //   border: '3px solid blue',
  //   width: 500,
  //   height: 450,
  //   ['@media (max-width: 677px)']: {
  //     border: '3px solid yellow',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     width: 'auto',
  //     height: 'auto',
  //   },
  // },
  imagen: {
    objectFit: 'cover',
    objectPosition: 'center',
  },
  video: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '703px',
    height: 'auto',
  },
  description: {
    display: 'flex',
    height: 'auto',
    flexWrap: 'wrap',
    marginTop: '1em',
    marginBottom: '1em',
    paddingLeft: '10px',
  },
})

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
}

const DetailPage = ({ data }) => {
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
          {Object.values(sources).map((source) => (
            <ImageListItem
              cols={source.cols || 1}
              rows={source.rows || 1}
              key={data.id}
            >
              {source.type === 'img' ? (
                <img
                  srcSet={srcset(source.img, 121, source.rows, source.cols)}
                  alt=""
                  className={classes.imagen}
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  className={classes.video}
                  src={srcset(source.url, 121, source.rows, source.cols)}
                />
              )}
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
      `}</style>
    </>
  )
}

export default DetailPage

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

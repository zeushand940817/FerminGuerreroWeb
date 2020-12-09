import Grid from '@material-ui/core/Grid'
import fetch from 'isomorphic-unfetch'

export default function DetailPage({ data }) {
  const images = data.images
  console.log(Object.keys(images), 'KEYS')
  console.log(Object.values(images), 'VALUES')

  return (
    <>
      <div className="container">
        <Grid container lg={12}>
          <img className="mainImage" src={data.image} />
        </Grid>
        <Grid container lg={12}>
          <div className="gridContainer">
            <Grid item xs={3} lg={2}>
              <div className="name"> {data.name}</div>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
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

        <div className="wrapperGalleria">
          {Object.values(images).map((image) => (
            <img className="img" src={image} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          font-size: 20px;
          padding: 40px 10px 0px 10px;
          margin-bottom: 30px;
        }

        .wrapperGalleria {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 15px;
          grid-auto-flow: dense;
        }

        .wrapperGalleria img:nth-child(3),
        .wrapperGalleria img:nth-child(4),
        .wrapperGalleria img:nth-child(6),
        .wrapperGalleria img:nth-child(8),
        .wrapperGalleria img:last-child {
          grid-column: span 2;
        }

        .img {
          width: 100%;
          grid-column: span 1;
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

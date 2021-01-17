import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  label: {
    ['@media (max-width:677px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  tagWrapper: {
    width: '100%',
    padding: '30px 20px 0px',
    ['@media (max-width:677px)']: {
      padding: '20px 15px 0px',
    },
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  videoClass: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: '20px',
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '25px',
  },
})

export default function Photography({ data }) {
  const classes = useStyles()
  const getAllTags = data
    .sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year)
    })
    .map(({ tags, image, mp4Video, mp4, img1, name }) => ({
      tags,
      image,
      mp4Video,
      mp4,
      img1,
      name,
    }))

  const photography = getAllTags.filter(
    (project) => project.tags && project.tags.includes('Photography')
  )

  return (
    <div className={classes.tagWrapper}>
      <div className={classes.root}>
        <ImageList
          variant="masonry"
          cols={3}
          gap={13}
          className={classes.label}
        >
          {photography.map((elem) => (
            <div className="container">
              <ImageListItem key={elem.id}>
                {elem.image && (
                  <img
                    className={classes.imagen}
                    alt="graphic-design-photo"
                    src={elem.image}
                  />
                )}
                {elem.mp4 && (
                  <video
                    autoPlay
                    muted
                    loop
                    width="100%"
                    height="auto"
                    className={classes.videoClass}
                  >
                    <source src={elem.mp4Video} type="video/mp4" />
                  </video>
                )}
                <div className={classes.text}>
                  <p>{elem.name}</p>
                </div>
              </ImageListItem>
            </div>
          ))}
        </ImageList>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/projects`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

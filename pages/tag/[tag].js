import Link from 'next/link'
import Head from 'next/head'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/pages.module.scss'

//Components
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Data fetching
import { getPathTags, getProjectsData } from 'utils/getData'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  label: {
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export default function Animation({ data, path }) {
  const classes = useStyles()
  const animation = data.filter(
    (project) => project.tags && project.tags.includes(path)
  )

  return (
    <>
      <Head>
        <title>Fermin Guerrero • {path}</title>
        <meta name="description" content="tag graphic typeface design" />
      </Head>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={13}
            className={classes.label}
          >
            {animation.map((elem) => (
              <Link
                key={elem.id}
                href={`/projects/[slug]`}
                as={`/projects/${elem.slug}`}
              >
                <a>
                  <div className={styles.container}>
                    <ImageListItem key={elem.id}>
                      {elem.image && (
                        <img
                          className={styles.imagen}
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
                          className={styles.videoClass}
                        >
                          <source src={elem.mp4Gallery} type="video/mp4" />
                        </video>
                      )}
                      <div className={styles.text}>
                        <p>{elem.name}</p>
                      </div>
                    </ImageListItem>
                  </div>
                </a>
              </Link>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPathTags()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const path = params.tag
  const data = await getProjectsData()
  return {
    props: {
      data,
      path,
    },
  }
}

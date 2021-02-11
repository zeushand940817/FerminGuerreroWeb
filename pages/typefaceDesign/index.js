import Link from 'next/link'
import Head from 'next/head'

//Components
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import Footer from 'components/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/pages.module.scss'

//Data fetching
import { getProjectsData } from 'utils/getData'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  imageList: {
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

export default function TypefaceDesign({ data }) {
  const classes = useStyles()
  return (
    <>
      <Head>
      <title>FG • Typeface Design</title>
        <meta
          name="description"
          content="Typeface design work from Fermin Guerrero"
        />
      </Head>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={13}
            className={classes.imageList}
          >
            {data.map((projectFilter) => (
              <Link
                key={projectFilter.id}
                href={`/projects/[slug]`}
                as={`/projects/${projectFilter.slug}`}
              >
                <a>
                  <div className={styles.container}>
                    <ImageListItem key={projectFilter.id}>
                      <LazyLoadImage
                        className={styles.imagen}
                        alt={projectFilter.name}
                        src={projectFilter.image}
                      />

                      <div className={styles.text}>
                        <p>{projectFilter.name}</p>
                      </div>
                    </ImageListItem>
                  </div>
                </a>
              </Link>
            ))}
          </ImageList>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const filteredData = data.filter((element) => element.type === 'typeface')
  return {
    props: {
      data: filteredData,
    },
  }
}

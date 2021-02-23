import Head from 'next/head'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/pages.module.scss'

//Components
import Masonry from 'components/Masonry'

//Data fetching
import { getPathTags, getProjectsData } from 'utils/getData'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
})

export default function Tag({ data, path, extractVideo }) {
  const classes = useStyles()

  const tagData = data.filter(
    (project) => project.tags && project.tags.includes(path)
  )

  return (
    <>
      <Head>
        <title>{path}</title>
        <meta name="description" content="tag graphic typeface design" />
      </Head>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <Masonry data={tagData} extractVideo={extractVideo} />
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
  const videoMp4 = data.filter((elem) => elem.id === 31)
  const extractVideo = videoMp4[0].mp4Gallery
  return {
    props: {
      data,
      path,
      extractVideo,
    },
  }
}

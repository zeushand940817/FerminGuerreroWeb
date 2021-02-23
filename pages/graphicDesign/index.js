import Head from 'next/head'

//Components
import Footer from 'components/Footer'
import Masonry from 'components/Masonry'

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
})

export default function GraphicDesign({ data, extractVideo }) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Graphic Design</title>
        <meta
          name="description"
          content="Fermin Guerrero's Graphic Design Projects"
        />
      </Head>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <ul>
            <Masonry data={data} extractVideo={extractVideo} />
          </ul>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await getProjectsData()
  const filteredData = data.filter((element) => element.type === 'graphic')
  const videoMp4 = data.filter((elem) => elem.id === 31)
  const extractVideo = videoMp4[0].mp4Gallery
  return {
    props: {
      data: filteredData,
      extractVideo,
    },
  }
}

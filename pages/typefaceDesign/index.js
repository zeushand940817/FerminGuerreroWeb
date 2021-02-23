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
        <title>Typeface Design</title>
        <meta name="description" content="Fermin Guerrero's typefaces" />
      </Head>
      <div className={styles.mainWrapper}>
        <div className={classes.root}>
          <Masonry data={data} />
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

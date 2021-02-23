import Link from 'next/link'
//styles
import styles from 'styles/project.module.scss'

//icons
import { CgMenuGridR } from 'react-icons/cg'
import { VscArrowRight } from 'react-icons/vsc'
import { VscArrowLeft } from 'react-icons/vsc'

//Components
import Grid from '@material-ui/core/Grid'

const NavigationProject = ({ element }) => {
  // const currentId = data.map((current) => current.id)

  // console.log({ currentId })

  // const [current, setCurrent] = useState(currentId[0])
  // const mapNavigation = navigationProjects.map((nav) => nav.id)

  // console.log('soy map navigation', mapNavigation)
  // console.log('SOY MAP NAVIGATION + 1', mapNavigation[current + 1])
  // console.log('SOY MAP NAVIGATION - 1', mapNavigation[current - 1])

  //  const handlePrev = (e) => {
  //     e.preventDefault()
  //     setCurrent((current) => console.log(mapNavigation[current - 1])
  //   };

  //   const handleNext = (e) => {
  //     e.preventDefault()
  //    setCurrent((current) => console.log(mapNavigation[current + 1]))
  //   };
  return (
    <div className={styles.navigation}>
      <Grid container>
        <Grid item xs={12} lg={2}>
          <button
            onClick={(e) => handlePrev(e)}
            className={styles.buttonNavigation}
          >
            <VscArrowLeft color="white" size={35} />
          </button>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <div className={styles.tagName}>
            {element.tags &&
              element.tags.map((tag) => {
                const transformName = tag.replace('-', ' ')
                return (
                  <>
                    <Link href={`/tag/${tag}`}>
                      <a className={styles.tagLink}>
                        <u>{transformName}</u>
                      </a>
                    </Link>
                  </>
                )
              })}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} lg={5}>
          <button className={styles.buttonNavigation}>
            <CgMenuGridR color="white" size={35} />
          </button>
        </Grid>
        <Grid item xs={12} lg={2} style={{ textAlign: 'end' }}>
          <button
            onClick={(e) => handleNext(e)}
            className={styles.buttonNavigation}
          >
            <VscArrowRight color="white" size={35} />
          </button>
        </Grid>
      </Grid>
    </div>
  )
}

export default NavigationProject

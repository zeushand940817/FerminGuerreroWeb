import Head from 'next/head'
import { useState, useRouter } from 'react'

//Styles
import styles from 'styles/project.module.scss'

//Components
import Footer from 'components/Footer'
import Grid from '@material-ui/core/Grid'
import ImageGallery from 'components/ImageGallery'
import CoverImage from 'components/CoverImage'
import Tags from 'components/Tags'
import DescriptionProject from 'components/DescriptionProject'
import Credits from 'components/Credits'
import NavigationProject from 'components/NavigationProject'
import SocialMedia from 'components/SocialMedia'

//Data fetching
import { getPaths, getProject, getProjectsData } from 'utils/getData'

const Projects = ({ data, navigationProjects, path }) => {
  return (
    <>
      <div className={styles.container}>
        {data.map((element) => {
          return (
            <>
              <Head>
                <title>{element.name} </title>
                <meta name="description" content={element.description} />
              </Head>

              <CoverImage element={element} />

              <Grid container>
                <div className={styles.gridContainer}>
                  <Grid item xs={12} lg={2}>
                    <div className={styles.name}>{element.name}</div>
                    {/* <SocialMedia element={element} /> */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={4}
                    className={styles.tagYearContainer}
                  >
                    <div>
                      <p>{element.year}</p>
                      <Credits element={element} />
                    </div>
                    <Tags element={element} />
                  </Grid>
                  <DescriptionProject element={element} />
                </div>
              </Grid>
              <ImageGallery element={element} />
              <NavigationProject
                element={element}
                navigationProjects={navigationProjects}
                path={path}
              />
            </>
          )
        })}
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPaths()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params.slug
  const data = await getProject(path)
  const navigationProjects = await getProjectsData()

  return {
    props: {
      data,
      navigationProjects,
      path,
    },
  }
}

export default Projects

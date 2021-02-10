import { useState } from 'react'

//Components
import Media from './Media'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

//Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    lineHeight: 1.4,
    paddingLeft: '3px',
  },
  content: {
    height: 'auto',
  },
  descriptiontwo: {
    marginBottom: 35,
  },
}))

export default function ({
  description,
  year,
  index,
  articles,
  description2,
  prensa,
}) {
  const classes = useStyles()
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <section className={classes.wrapper} id="research">
        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item lg={2} />
            <Grid item lg={2} />
            <Grid item xs={3} lg={1}>
              <Box className={classes.box}>{year}</Box>
            </Grid>
            <Grid
              item
              xs={6}
              lg={4}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <Box className={classes.content}>{description}</Box>

              <Box className={classes.descriptiontwo}>{description2}</Box>
            </Grid>
            <Grid item xs={1} lg={1}>
              {articles && <Media image={articles[activeIndex]?.image} />}
              {prensa && <Media image={prensa[activeIndex]?.image} />}
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  )
}

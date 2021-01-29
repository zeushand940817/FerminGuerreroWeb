//Styles
import { makeStyles } from '@material-ui/core/styles'

//Componets
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    marginTop: 60,
    marginBottom: 50,
    lineHeight: 1.4,
    paddingLeft: '3px',
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    ['@media (min-width: 378px)']: {
      paddingRight: 10,
    },
  },
  textSectionLast: {
    marginBottom: 0,
    marginTop: 10,
  },

  firstBox: {
    marginTop: 50,
    marginBottom: 35,
  },
  secondBox: {
    marginTop: 50,
  },
}))

export default function Awards() {
  const classes = useStyles()

  return (
    <section className={classes.wrapper} id="awards">
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={false} lg={2} sm={false} />
          <Grid item lg={2} sm={false} xs={false} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.firstBox}>2019</Box>
          </Grid>
          <Grid item xs={6} lg={4} sm={false}>
            <Box className={classes.firstBox}>
              LAD - Latin Design Awards. Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.firstBox}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}>2018</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              European Design Awards Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.text}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              Swiss Typefaces selected Thesaurus for their 40 pages specimen
              called Type Life 3, showcasing 19 non-SWTY typefaces they like.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.text}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              Type 4: Typeface Design Competition by Graphis magazine. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.text}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box className={classes.textSectionLast}>
              Latin-American typedesign biennial (Tipos Latinos). Superfamily
              category Project: Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.textSectionLast}>
              Mention of Exellence (First Prize).
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.secondBox}>2015</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.secondBox}>
              Trnava Poster Triennial International competition. Project: New
              Year, New Fight.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.secondBox}>Honorary mention.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.secondBox}>2014</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.secondBox}>
              Rolex's Foundation (Hans Wilsdorf) awarded me their schoolarship
              for my BA graduate project.
            </Box>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box className={classes.secondBox}>
              BEA fondation award for young artists.
            </Box>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>
    </section>
  )
}

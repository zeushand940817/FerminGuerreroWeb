import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    marginTop: 50,
    marginBottom: 50,
  },
  text: {
    marginBottom: 20,
    marginTop: 20,
  },
  prize: {
    marginBottom: 20,
    marginTop: 20,
  },
  box: {
    marginTop: 50,
  },
}))

export default function Exhibitions({ data }) {
  const classes = useStyles()

  return (
    <section className={classes.wrapper} id="exhibitions">
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={false} lg={2} sm={false} />
          <Grid item lg={2} sm={false} xs={false} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.box}>2018</Box>
          </Grid>
          <Grid item xs={6} lg={4} sm={false}>
            <Box className={classes.box}>
              Latin-American typedesign biennial organized by Typos Latinos.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.box}>Colombia.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}>2016</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              Type Masters Exhibition organized by the Berliner Typostammtisch.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>Berlin.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}>2015</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              50 Diplômes exhibition organized by Étapes magazine and RedBull
              Studios.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>Paris.</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}></Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>Trnava Poster Triennial.</Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>Slovakia.</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}></Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              World’s best poster designers 2015, International Invitational
              Exhibition. Organized by Guan Shanyue Art Museum.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>China.</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}></Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              These Woods Have Ears. Organized by Rock This Town.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>Geneva, Switzerland.</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}>2013</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>
              100 typographic posters International Invitational Exhibition.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>China.</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} sm={0} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.text}>2011</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box className={classes.text}>Weltformat Poster Festival.</Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.prize}>Lucerne, Switzerland.</Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

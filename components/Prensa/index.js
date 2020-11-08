import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize:20,
    color:'white',
  }
}))

const Prensa = () => {
  const classes = useStyles()
  return (
    <section className={classes.text}>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box id="research" mb={10} mt={3}>
              2020
            </Box>
          </Grid>
          <Grid item xs={9} lg={3} sm={6}>
            <Box mt={3} mb={10}>
              Brick; A New Font Brewing. Published at Medium.
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box id="research" mb={10}>
              2017
            </Box>
          </Grid>
          <Grid item xs={9} lg={3} sm={6}>
            <Box mb={10}>
              Thesaurus’s development. Published at I Love Typography
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={4} sm={0} />
            <Grid item xs={3} lg={1} sm={3}>
              <Box mb={10}>2015</Box>
            </Grid>
            <Grid item xs={9} lg={3} sm={6}>
              <Box mb={10}>
                A study of the development of monograms: from Ancient Greek
                coins to contemporary logos. MATD’s dissertation. Published in
                Academia.
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={4} sm={0} />
            <Grid item xs={3} lg={1} sm={3} />
            <Grid item xs={9} lg={3} sm={6}>
              <Box mb={10}>
                An inside look at the creation process of Exentra. MATD’s R.O.P.
                (reflection on practice).
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={4} sm={0} />
            <Grid item xs={3} lg={1} sm={3}>
              <Box mb={10}>2014</Box>
            </Grid>
            <Grid item xs={6} lg={3} sm={6}>
              <Box mb={10}>
                If Geneva was a typeface. Bachelor thesis at HEAD.
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}
export default Prensa;

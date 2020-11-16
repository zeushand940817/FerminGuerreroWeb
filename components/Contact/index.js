import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  li: {
    listStyle: 'none',
  },
  a: {
    fontSize:20,
    textDecoration: 'none',
    color: 'white',
  },
  li:{
    listStyle: 'none',
  },
  text: {
    fontSize:20,
    color:'white',
  },

}))

export default function Contact() {
  const classes = useStyles()
  return (
    <section>
      <Grid item lg={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box className={classes.text} id="contact" mt={3} sm={1}>
              Email
            </Box>
          </Grid>
          <Grid item xs={9} lg={2} sm={3}>
            <Box  className={classes.text}  mb={2} mt={3} sm={1}>
              contact@ferminguerrero.com
            </Box>
          </Grid>
          <Grid item lg={4} sm={2} />
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3} />
          <Grid item xs={9} lg={2} sm={1}>
            <Box className={classes.text}>Dubai, UAE.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3} />
          <Grid item xs={9} lg={2} sm={1}>
            <Box  className={classes.text}  mb={5}>Clock 17:35pm.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box  className={classes.text}  mb={10}>Follow</Box>
          </Grid>
          <Grid item xs={3} sm={4}>
            <Box  className={classes.text}  mb={10}>
              <li className={classes.li}>
                <a
                  className={classes.a}
                  href="https://www.instagram.com/ferminguerrero_design/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className={classes.li}>
                <a
                  className={classes.a}
                  href="https://twitter.com/fermin_guerrero"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li className={classes.li}>
                <a
                  className={classes.a}
                  href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

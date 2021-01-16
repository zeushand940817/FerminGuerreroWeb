import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

//Components
import Time from '@components/Time'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    lineHeight: 1.4,
    ['@media (max-width: 677px)']: {
      fontSize: 18,
      lineHeight: 1.2,
      marginTop: 10,
      marginBottom: 20,
    },
  },
  li: {
    listStyle: 'none',
    ['@media (max-width: 677px)']: {
      fontSize: 18,
      marginBottom: 5,
    },
  },
  box: {
    marginTop: 50,
    marginBottom: 10,
    ['@media (max-width: 677px)']: {
      fontSize: 18,
      marginTop: 10,
      marginBottom: 10,
      paddingTop: 0,
    },
    ['@media (max-width: 1024px)']: {
      fontSize: 18,
    },
  },
  a: {
    fontSize: 20,
    textDecoration: 'none',
    color: 'white',
    borderBottom: '1px solid white',
    ['@media (max-width: 677px)']: {
      fontSize: 18,
    },
  },

  text: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    ['@media (max-width: 677px)']: {
      fontSize: 18,
      marginBottom: 5,
    },
  },
  textFollow: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    ['@media (max-width: 677px)']: {
      fontSize: 18,
      marginBottom: 5,
      marginTop: 5,
    },
  },
}))

export default function Contact() {
  const classes = useStyles()
  return (
    <section className={classes.wrapper} id="contact">
      <Grid item lg={12} container>
        <Grid container direction="row">
          <Grid item lg={2} sm={false} />
          <Grid item lg={2} sm={false} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.box}>Email</Box>
          </Grid>
          <Grid item xs={9} lg={2} sm={3}>
            <Box className={classes.box}>
              <a className={classes.a} href="mailto:contact@ferminguerrero.com">
                contact@ferminguerrero.com
              </a>
            </Box>
          </Grid>
          <Grid item lg={4} sm={2} />
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item lg={2} />
          <Grid item xs={3} lg={1} sm={3} />
          <Grid item xs={9} lg={2} sm={1}>
            <Box>Dubai, UAE.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item lg={2} />
          <Grid item lg={2} />
          <Grid item xs={3} lg={1} sm={3} />
          <Grid item xs={9} lg={2} sm={1}>
            <Box className={classes.text}>
              <Time />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item lg={2} />
          <Grid item lg={2} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box className={classes.textFollow}>Follow </Box>
          </Grid>
          <Grid item xs={3} sm={4} className={classes.textFollow}>
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
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

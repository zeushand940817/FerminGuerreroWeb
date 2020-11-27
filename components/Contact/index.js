import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    marginTop:50,
  },
  li: {
    listStyle: 'none',
  },
  box:{
    marginTop:50,
    marginBottom:20,
  },
  a: {
    fontSize:20,
    textDecoration: 'none',
    color: 'white',
  },
  text: {
    fontSize:20,
    color:'white',
    marginBottom:10,
  },
}))

export default function Contact() {
  const classes = useStyles()
  return (
    <section className={classes.wrapper} id="contact" >      
      <Grid item lg={12}container>
        <Grid container  direction="row">
          <Grid item lg={2} sm={false} />
          <Grid item  lg={2} sm={1}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.box}> Email </Box> 
          </Grid>
          <Grid item xs={9} lg={2} sm={3} >
          <Box className={classes.box}> contact@ferminguerrero.com </Box>
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
          <Box className={classes.text}> Dubai, UAE.</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item lg={2} />
          <Grid item lg={2} /> 
          <Grid item xs={3} lg={1} sm={3} />
          <Grid item xs={9} lg={2} sm={1}>
          <Box className={classes.text}> current time </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item lg={2}  />
          <Grid item lg={2} /> 
          <Grid item xs={3} lg={1} sm={3}> 
          <Box className={classes.text}> Follow </Box>
          </Grid>
          <Grid item xs={3} sm={4} className={classes.text}>
              <li className={classes.li}>
                <a className={classes.a}
                   href="https://www.instagram.com/ferminguerrero_design/"
                   target="_blank"> Instagram </a>
              </li>
              <li  className={classes.li}>
                <a className={classes.a}
                  href="https://twitter.com/fermin_guerrero"
                  target="_blank"> Twitter </a>
              </li>
              <li className={classes.li}>
                <a className={classes.a}
                   href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
                   target="_blank"> Linkedin </a>
              </li>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

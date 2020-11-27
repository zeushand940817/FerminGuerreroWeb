import { useState } from 'react';
import Media from './Media';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    color:'white',
  },
  content:{
    marginTop:50,
    marginBottom:20,
  }
}))

export default function ({ url, description, year, index, articles }) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(-1);

  return (   
    <>
    <section className={classes.wrapper} id="research">
    <Grid item xs={12} container >
        <Grid container direction="row"
         onMouseEnter={() => setActiveIndex(index)}
         onMouseLeave={() => setActiveIndex(-1)}>
          <Grid item lg={2} />
          <Grid item  lg={2} /> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.content}>{year}</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.content}>{description}</Box>
          </Grid>
          <Grid item xs={1} lg={1} >
            <Media image={articles[activeIndex]?.image} />
          </Grid>
        </Grid>
      </Grid>
      </section>
      </>
  )
}

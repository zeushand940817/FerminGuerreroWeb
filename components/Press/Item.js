import React, { useState } from 'react'
import Media from './Media';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    color:'white',
  },

  box: {
    marginTop:50,
  }

}))

export default function ({ title, description, year, index, articles }) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(-1);

  return (   
    <>
    <section className={classes.wrapper} id="research">
    <Grid item xs={12} container>
        <Grid container direction="row"
         onMouseEnter={() => setActiveIndex(index)}
         onMouseLeave={() => setActiveIndex(-1)}>
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.box}>
            <Box>{year}</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.box}>{description}</Box> 
          </Grid>
          <Grid item lg={1} xs={0} />
          <Grid item xs={1} lg={2} >
            <Hidden xsDown>
            <Media image={articles[activeIndex]?.image} />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
      </section>
      </>
  )
}

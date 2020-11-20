import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  text: {
    fontSize:20,
    color:'white',
    cursor:'pointer',
  },
  wrapper: {
    fontSize:20,
  },
  box: {
    marginTop:50,
  },
  image: {
    width:'100%',
  },
  texto:{
    cursor:'pointer',
  }

}))


export default function Prensa() {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Grid item xs={12} id="research" container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box className={classes.box}> 2020 </Box>
          </Grid>
          <Grid item xs={9} lg={4} sm={6}>
            <Box mb={5} className={classes.box}>
              Brick; A New Font Brewing. Published at Medium. 
            </Box>
          </Grid>
          <Grid lg={3}>
          <img src='/Articles/Brick.png' style={{width: '200px'}}/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} sm={0} />
          <Grid item xs={3} lg={1} sm={3}>
            <Box id="research" mb={10}> 2017 </Box>
          </Grid>
          <Grid item xs={9} lg={4} sm={6}>
            <Box className={classes.texto} mb={5}>
              Thesaurus’s development. Published at I Love Typography.
            </Box>
          </Grid>
          <Grid lg={3}>
           
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={2} sm={0} />
            <Grid item xs={3} lg={1} sm={3}>
              <Box mb={10}>2015</Box>
            </Grid>
            <Grid item xs={9} lg={4} sm={6}>
              <Box className={classes.texto} mb={5}> 
              A study of the development of monograms: from Ancient Greek
              coins to contemporary logos. MATD’s dissertation. Published in
              Academia.
              </Box>
            </Grid>
            <Grid lg={3} />
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={2} sm={0} />
            <Grid item xs={3} lg={1} sm={3} />
            <Grid item xs={9} lg={4} sm={6}>
              <Box className={classes.texto} mb={5}>
                An inside look at the creation process of Exentra. MATD’s R.O.P.
                (reflection on practice).
              </Box>
            </Grid>
            <Grid lg={3} />
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Grid container direction="row">
            <Grid item xs={0} lg={2} sm={0} />
            <Grid item xs={3} lg={1} sm={3}>
              <Box mb={10}> 2014 </Box>
            </Grid>
            <Grid item xs={6} lg={4} sm={6}>
              <Box 
              className={classes.texto} mb={30}>
                If Geneva was a typeface. Bachelor thesis at HEAD. 
              </Box>
            </Grid>
            <Grid lg={3} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}



// <Grid item xs={12} container>
// <Grid container direction="row">
//   <Grid item xs={0} lg={2} sm={0} />
//   <Grid item xs={3} lg={1} sm={3}>
//     <Box mb={10}>2015</Box>
//   </Grid>
//   <Grid item xs={9} lg={4} sm={6}>
//     <Box 
//     className={classes.texto}
//     mb={5}
//     onMouseEnter={() => setIsShown(true)}
//     onMouseLeave={() => setIsShown(false)}
//     > 
//       A study of the development of monograms: from Ancient Greek
//       coins to contemporary logos. MATD’s dissertation. Published in
//       Academia.
//     </Box>
//   </Grid>
//   <Grid lg={3}>
//   {isShown && (
//   <img 
//     className={classes.image} 
//     src='/Articles/Monograms.png' 
//     alt="Monograms"
//   />
//   )}
// </Grid>
// </Grid>
// </Grid>
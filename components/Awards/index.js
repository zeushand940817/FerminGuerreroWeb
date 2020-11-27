import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    color:'white',
    marginTop:50,
    marginBottom:50,
  },
  text: {
    marginBottom:20,
    marginTop:20,
  },
  prize: {
    marginBottom:30,
  },
  box:{
    marginTop:50,
  },
}))

export default function Awards({data}) {
  const classes = useStyles()
  

  return (
    <section className={classes.wrapper} id="awards">
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={false} lg={2} sm={false} />
          <Grid item  lg={2} sm={false} xs={false}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.box}>
            2019
          </Box>
          </Grid>
          <Grid item xs={6} lg={4} sm={false}>
          <Box className={classes.box}>
             LAD - Latin Design Awards. Typeface design category. Project:
             Thesaurus.
          </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
          <Box className={classes.box}>
            Gold
          </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.text}>
            2018
          </Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.text}>
            European Design Awards Typeface design category. Project:
            Thesaurus.
          </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
          <Box className={classes.prize}>
            Gold
          </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4} > 
          <Box className={classes.text}>
            Swiss Typefaces selected Thesaurus for their 40 pages specimen
            called Type Life 3, showcasing 19 non-SWTY typefaces they like.
          </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
          <Box className={classes.prize}>
            Gold
          </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
          <Box className={classes.text}>
            Type 4 : Typeface Design Competition by Graphis magazine. Project:
            Thesaurus
          </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
          <Box className={classes.prize}>
            Gold
          </Box>
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.text}>
            2018
          </Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.text}>
            Latin-American typedesign biennial (Tipos Latinos). Superfamily
            category Project: Thesaurus.
          </Box>
          </Grid>
          <Grid item lg={1}/>
          <Grid item xs={3} lg={2}>
          <Box className={classes.prize}>
            Mention of Exellence (First Prize).
          </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.text}>
            2015
          </Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.text}>
            Trnava Poster Triennial International competition. Project: New
            Year, New Fight.
          </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
          <Box className={classes.prize}>
            Honorary mention.
          </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.text}>
            2014
          </Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.text}>
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
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1}>
          <Box className={classes.text}>
            2014
          </Box>
          </Grid>
          <Grid item xs={6} lg={4}>
          <Box className={classes.prize}>
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

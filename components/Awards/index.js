import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    color:'white',
    marginTop:50,
    marginBottom:50,
  },
  text: {
    marginBottom:20,
  },
  prize: {
    marginBottom:30,
    ['@media (max-width:1024px)']: {
      paddingLeft:30,
    },
  },
  box:{
    marginTop:50,
    ['@media (max-width:677px)']: {
      marginTop:10,
      marginBottom:20,
    }
  },
}))

export default function Awards({data}) {
  const classes = useStyles()
  

  return (
    <section className={classes.wrapper} id="awards">
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.box}>
            2019
          </Grid>
          <Grid item xs={6} lg={4} className={classes.box}>
             LAD - Latin Design Awards. Typeface design category. Project:
             Thesaurus.
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2} className={classes.box}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.text}>
            2018
          </Grid>
          <Grid item xs={6} lg={4} className={classes.text}>
            European Design Awards Typeface design category. Project:
            Thesaurus.
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2} className={classes.prize}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4} className={classes.text}>
            Swiss Typefaces selected Thesaurus for their 40 pages specimen
            called Type Life 3, showcasing 19 non-SWTY typefaces they like.
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2} className={classes.prize}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4} className={classes.text}>
            Type 4 : Typeface Design Competition by Graphis magazine. Project:
            Thesaurus
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2} className={classes.prize}>
            Gold
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.text}>
            2018
          </Grid>
          <Grid item xs={6} lg={4} className={classes.text}>
            Latin-American typedesign biennial (Tipos Latinos). Superfamily
            category Project: Thesaurus.
          </Grid>
          <Grid item lg={1}/>
          <Grid item xs={3} lg={2} className={classes.prize}>
            Mention of Exellence (First Prize).
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.text}>
            2015
          </Grid>
          <Grid item xs={6} lg={4} className={classes.text}>
              Trnava Poster Triennial International competition. Project: New
              Year, New Fight.
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2} className={classes.prize}>
            Honorary mention.
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.text}>
            2014
          </Grid>
          <Grid item xs={6} lg={4} className={classes.text}>
            Rolex's Foundation (Hans Wilsdorf) awarded me their schoolarship
            for my BA graduate project.
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item  lg={2} sm={0}/> 
          <Grid item xs={3} lg={1} className={classes.text}>
            2014
          </Grid>
          <Grid item xs={6} lg={4} className={classes.prize}>
            BEA fondation award for young artists.
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>
    </section>
  )
}

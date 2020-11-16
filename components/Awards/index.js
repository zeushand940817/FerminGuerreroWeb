import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize:20,
    color:'white',
  },
  box: {
    marginTop:50,
  }
}))

export default function Awards() {
  const classes = useStyles()

  return (
    <section className={classes.wrapper} id="awards">
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box className={classes.box}>2019</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4} className={classes.box}>
             LAD - Latin Design Awards. Typeface design category. Project:
             Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box className={classes.box}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box>2018</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              European Design Awards Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              Swiss Typefaces selected Thesaurus for their 40 pages specimen
              called Type Life 3, showcasing 19 non-SWTY typefaces they like.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1} />
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              Type 4 : Typeface Design Competition by Graphis magazine. Project:
              Thesaurus
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Gold
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box>2019</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              LAD - Latin Design Awards. Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Gold
          </Grid>
        </Grid>
      </Grid>


      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box>2018</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              Latin-American typedesign biennial (Tipos Latinos). Superfamily
              category Project: Thesaurus
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Mention of Exellence (First Prize).
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box>2015</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
              Trnava Poster Triennial International competition. Project: New
              Year, New Fight.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            Honorary mention.
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={2} />
          <Grid item xs={3} lg={1}>
            <Box>2014</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={4}>
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
          <Grid item xs={3} lg={1}>
            <Box>2014</Box>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Box mb={15}>BEA fondation award for young artists.</Box>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>
    </section>
  )
}


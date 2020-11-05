import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 30,
    alignItems: 'center',
    padding: '3px 30px 0px 30px',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'white',
  },
  premio:{
    cursor:'pointer',
  }
}))

const Awards = () => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={4} />
          <Grid item xs={3} lg={1} sm={1}>
            <Box id="awards" mt={3}>
              2019
            </Box>
          </Grid>
          <Grid item xs={6} lg={3} sm={3}>
            <Box mb={5} mt={3} className={classes.premio}>
              LAD - Latin Design Awards. Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1} />
          <Grid item xs={3} lg={2}>
            <Box mt={3}>Gold</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={4} />
          <Grid item xs={3} lg={1} sm={1}>
            <Box>2018</Box>
          </Grid>
          <Grid item xs={6} lg={3} sm={3}>
            <Box mb={5}>
              European Design Awards Typeface design category. Project:
              Thesaurus.
            </Box>
          </Grid>
          <Grid item lg={1}/>
          <Grid item xs={3} lg={2}>
            Gold
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={4} />
          <Grid item xs={3} lg={1} sm={1} />
          <Grid item xs={6} lg={3} sm={3}>
            <Box mb={5}>
              Swiss Typefaces selected Thesaurus for their 40 pages specimen
              called Type Life 3, showcasing 19 non-SWTY typefaces they like.
            </Box>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>

      <Grid item xs={12} container>
        <Grid container direction="row">
          <Grid item xs={0} lg={4} sm={4} />
          <Grid item xs={3} lg={1} sm={1} />
          <Grid item xs={6} lg={3} sm={3}>
            <Box mb={5}>
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
          <Grid item xs={0} lg={4} sm={4} />
          <Grid item xs={3} lg={1} sm={1}>
            <Box>2019</Box>
          </Grid>
          <Grid item xs={6} lg={3} sm={3}>
            <Box mb={5}>
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
          <Grid item xs={0} lg={4} />
          <Grid item xs={3} lg={1}>
            <Box>2018</Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box mb={5} pr={2}>
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
          <Grid item xs={0} lg={4} />
          <Grid item xs={3} lg={1}>
            <Box>2015</Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box mb={5}>
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
          <Grid item xs={0} lg={4} />
          <Grid item xs={3} lg={1}>
            <Box>2014</Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box mb={5}>
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
          <Grid item xs={0} lg={4} />
          <Grid item xs={3} lg={1}>
            <Box>2014</Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box mb={5}>BEA fondation award for young artists.</Box>
          </Grid>
          <Grid item lg={2} />
          <Grid item xs={3} lg={2} />
        </Grid>
      </Grid>
    </>
  )
}
export default Awards;

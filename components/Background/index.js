import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
  },
  box: {
    marginTop: 50,
    ['@media (max-width: 677px)']: {
      fontSize: 16,
      marginTop: 10,
    },
  },
}))

export default function Background() {
  const classes = useStyles()

  return (
    <section className={classes.wrapper}>
      <Grid container direction="column">
        <Grid item id="background" lg={12} container>
          <Grid item lg={2} sm={false} />
          <Grid item lg={2} sm={1} />
          <Grid item lg={7} sm={12}>
            <Box component="p" className={classes.box}>
              Fermin Guerrero's visual communication practice focusing on
              Graphic and Typeface Design. In 2010, after he finished his
              bachelor in Industrial Design at Escuela Universitaria Centro de
              Diseño - Uruguay, Fermin Guerrero moved to Switzerland to study
              Visual Communication at the Haute École d’Art et de Design (HEAD)
              - Geneva, where he received his BA with first class honours. He
              subsequently went on to complete a Masters in Typeface Design at
              the University of Reading–UK, receiving his MA with Distinction in
              September 2015. Fermin has worked as an independent designer for
              more than 13 years, having won several prestigious prizes and
              commission for reknown international clients. His work has been
              featured in the most relevant international press. His curiosity,
              which has led him to move to out of his country in the quest for
              personal and professional development, keeps him constantly
              searching for new ways to express his ideas. He is currently based
              in the UAE, since 2018, where he has been appointed the Senior
              Graphic Designer.
            </Box>
          </Grid>
          <Grid item lg={2} sm={2} />
          <Grid item lg={2} sm={2} />
        </Grid>
      </Grid>
    </section>
  )
}

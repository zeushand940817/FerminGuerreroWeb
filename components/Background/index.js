import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SideNav from 'components/SideNav';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    fontSize:20,
    padding: 5,
  },
}))

const Background = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column">
        <Grid item lg={12} container>
          <Grid item lg={3} sm={2}>
            <SideNav />
          </Grid>
          <Grid item lg={1} sm={2} />
          <Grid item lg={6} sm={6}>
            <Box className={classes.background} id="bckg" mb={6}>
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
        </Grid>
      </Grid>
    </>
  )
}
export default Background;

//Styles
import { makeStyles } from '@material-ui/core/styles'

//Componets
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
  },
  box: {
    marginTop: 50,
    paddingLeft: '3px',
    lineHeight: 1.4,
    ['@media (max-width:480px)']: {
      fontSize: 20,
      lineHeight: 1.4,
      marginTop: 10,
      marginBottom: 20,
      paddingTop: 0,
      paddingLeft: '0px',
    },
    ['@media (max-width: 768px)']: {
      fontSize: 20,
      lineHeight: 1.2,
      marginTop: 10,
    },
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <section className={classes.wrapper}>
      <Grid container direction="column">
        <Grid item id="about" lg={12} container>
          <Grid item lg={2} sm={false} />
          <Grid item lg={2} sm={1} />
          <Grid item lg={7} sm={12}>
            <Box component="p" className={classes.box}>
              Online platform for Fermin Guerrero's visual communication
              practice focusing on Graphic Design/Art Direction and Typeface
              Design.
              <br />
              <br />
              Fermin was born in Uruguay in 1983. In 2010, after he finished his
              bachelor in Industrial Design at{' '}
              <a
                href="https://www.fadu.edu.uy/eucd/"
                rel="noreferrer"
                target="_blank"
                className="linkInText"
              >
                <u>Centro de Diseño</u>
              </a>
              –Uruguay , Guerrero moved to Switzerland to study Visual
              Communication at the School of Art and Design{' '}
              <a
                href="https://www.hesge.ch/head/"
                rel="noreferrer"
                target="_blank"
              >
                <u>(HEAD)–Geneva </u>
              </a>
              , where he received his BA with <i>first class honours</i>. He
              subsequently went on to complete a Masters in Typeface Design
              (MATD) at the{' '}
              <a href="http://www.reading.ac.uk/" target="_blank">
                <u>University of Reading</u>
              </a>
              –UK, receiving his MA with <i>Distinction</i> in September 2015.
              <br />
              <br />
              For over 10 years, Fermin has worked for renown international
              clients on a wide range of projects across different platforms and
              disciplines. His work has received many prestigious prizes and
              awards and has been regularly highlighted by the most relevant
              international design press. From 2015 to 2018, Guerrero taught a
              variety of Graphic Design and Typography related courses at
              HEAD–Geneva. His curiosity, which has led him to move out of his
              country in the quest for personal and professional development,
              keeps him constantly searching for new ways to express his ideas.
              He is currently based in the UAE, since 2018, where he has been
              appointed the Senior Graphic Designer at{' '}
              <a
                href="https://www.sharjaharchitecture.org/"
                rel="noreferrer"
                target="_blank"
              >
                <u>Sharjah Architecture Triennial</u>
              </a>
              .
            </Box>
          </Grid>
          <Grid item lg={2} sm={2} />
          <Grid item lg={2} sm={2} />
        </Grid>
      </Grid>
    </section>
  )
}

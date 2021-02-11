//Styles
import { makeStyles } from '@material-ui/core/styles'

//Componets
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    marginTop: 60,
    marginBottom: 50,
    lineHeight: 1.4,
    paddingLeft: '3px',
  },
  text: {
    marginBottom: 35,
  },
  box: {
    paddingTop: 50,
  },
}))

export default function Awards({ awardsData }) {
  const classes = useStyles()
  const awards = Object.values(awardsData)

  return (
    <section className={classes.wrapper} id="awards">
      <div className={classes.box}>
        <Grid item xs={12} container>
          {awards.map((element) => (
            <Grid container direction="row">
              <Grid item xs={false} lg={2} sm={false} />
              <Grid item lg={2} sm={false} xs={false} />
              <Grid item xs={3} lg={1}>
                <Box className={classes.text}>{element.year}</Box>
              </Grid>
              <Grid item xs={6} lg={4} sm={false}>
                <Box className={classes.text}>{element.title}</Box>
              </Grid>
              <Grid item lg={1} />
              <Grid item xs={3} lg={2}>
                <Box className={classes.text}>{element.prize}</Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

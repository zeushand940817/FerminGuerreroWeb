//Styles
import { makeStyles } from '@material-ui/core/styles'

//Components
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

export default function Exhibitions({ exhibitions }) {
  const exhibitionsMap = Object.values(exhibitions)
  const classes = useStyles()

  return (
    <section className={classes.wrapper} id="exhibitions">
      <div className={classes.box}>
        <Grid item xs={12} container>
          {exhibitionsMap.map((element) => (
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
                <Box className={classes.text}>{element.country}</Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

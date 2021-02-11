//Styles
import { makeStyles } from '@material-ui/core/styles'

//Components
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontSize: 20,
    color: 'white',
    marginBottom: 50,
    lineHeight: 1.4,
    paddingLeft: '3px',
  },
  text: {
    marginBottom: 35,
  },
}))

export default function OnlinePress({ pressOnlineData }) {
  const pressOnline = Object.values(pressOnlineData)
  const classes = useStyles()

  return (
    <section className={classes.wrapper} id="exhibitions">
      <div className={classes.box}>
        <Grid item xs={12} container>
          {pressOnline.map((element) => (
            <Grid container direction="row">
              <Grid item xs={false} lg={2} sm={false} />
              <Grid item lg={2} sm={false} xs={false} />
              <Grid item xs={3} lg={1}>
                <Box className={classes.text}>{element.year}</Box>
              </Grid>
              <Grid item xs={3} lg={2}>
                <Box className={classes.text}>
                  <a
                    style={{
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationThickness: '0.5px',
                    }}
                    href={element.url}
                    target="_blank"
                  >
                    {element.title}
                  </a>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

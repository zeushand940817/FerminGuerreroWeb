import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import fetch from 'isomorphic-unfetch'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexGrow: 1,
    alignItems: 'center',
    padding: '0px 20px 0px 20px',
  },
  img:{
    width:'100%' 
  },
  imgGallery:{
    width:'100%',
    height: '100%',
  paddingTop:'20px'
  },
  paper: {
    height: 140,
    width: 200,
    boxShadow: 'none',
  },
  description:{
    flexWrap: 'wrap',
  }
}))


export default function DetailPage({data}) {

  const classes = useStyles()
     return (
      <div className={classes.root}>
        <Grid container lg={12}>
          <img className={classes.img} src={data.image} />
        </Grid>

      <Grid container lg={12}>
        <Grid item xs={3} lg={3}>
          <Paper className={classes.paper}>{data.name}</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Paper className={classes.paper}>{data.year}</Paper>
        <Paper className={classes.paper}> Tags: Poster, Illustration, Visual Identity</Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={3}>
          <Box className={classes.description}>
          {data.attributes.description}
          </Box>
        </Grid>

      </Grid>

      <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className={classes.imgGallery} src={data.images.img2} />
        </Grid>
        <Grid item lg={6}>
          <img className={classes.imgGallery} src={data.images.img3} />
        </Grid>
       </Grid>
       <Grid container spacing={1}>
        <Grid item lg={6}>
          <img className={classes.imgGallery} src={data.images.img4} />
        </Grid>
        <Grid item lg={6}>
          <img className={classes.imgGallery} src={data.images.img5} />
        </Grid>
       </Grid>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { id } = context.params
  const res = await fetch(`${API_URL}/api/projects/${id}`)
  const data = await res.json()
  console.log(data, 'data')
  return {
    props: {
      data: data,
    },
  }

}
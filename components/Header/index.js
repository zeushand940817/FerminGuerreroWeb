import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../ActiveLink';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '40px',
    alignItems: 'center',
    padding: '3px 20px 5px 20px',
    fontSize:'20px',
    backgroundColor: 'black',
    width:'100%',
  },
  a: {
    textDecoration: 'none',
    ouline:'none',
  }
 
}))

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12} container>
          <Grid item xs={3} md={2} lg={4}>
          
            <Link className={classes.a} href="/" as="/" activeClassName="active" passHref>
              Fermin Guerrero
            </Link>
          
          </Grid>
          <Grid item xs={3} md={2} lg={2}>

            <Link className={classes.a} href="/graphicDesign" as="/graphicDesign" activeClassName="active" passHref>
              Graphic Design
            </Link>

          </Grid>
          <Grid item xs={2} md={2} lg={1}>

            <Link className={classes.a} href="/all" as="/all" activeClassName="active" passHref>
              &
            </Link>

          </Grid>

          <Grid item xs={3} md={2} lg={4}>

            <Link href="/typefaceDesign" as="/typefaceDesign" activeClassName="active" passHref>
              Typeface Desgin
            </Link>
    
          </Grid>

          <Grid className={classes.about} item xs={1} lg={1} md={2}>
  
            <Link className={classes.a} href="/about" as="/about" activeClassName="active" passHref>
              About
            </Link>
       
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;
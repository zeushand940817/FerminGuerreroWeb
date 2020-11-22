import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../ActiveLink';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    alignItems: 'center',
    padding: '3px 20px 5px 20px',
    fontSize:20,
    backgroundColor: 'black',
    width:'100%',
  },
  link: {
    listStyle:'none',
    textDecoration: 'none',
    color:'#EF6800'
  },
  a: {
    textDecoration: 'none',
    fontSize:20,
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
            <li className={classes.link}>
            <Link href="/" as="/" activeClassName="active" passHref>
              Fermin Guerrero
            </Link>
            </li>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <li className={classes.link}>
            <Link href="/graphicDesign" as="/graphicDesign" activeClassName="active" passHref>
              Graphic Design
            </Link>
            </li>
          </Grid>
          <Grid item xs={2} md={2} lg={1}>
            <li className={classes.link}>
            <Link href="/all" as="/all" activeClassName="active" passHref>
              &
            </Link>
           </li>
          </Grid>

          <Grid item xs={3} md={2} lg={4}>
            <li className={classes.link}>
            <Link href="/typefaceDesign" as="/typefaceDesign" activeClassName="active" passHref>
              Typeface Desgin
            </Link>
            </li>
          </Grid>

          <Grid className={classes.about} item xs={1} lg={1} md={2}>
            <li className={classes.link}>
            <Link href="/about" as="/about" activeClassName="active" passHref>
              About
            </Link>
            </li>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;
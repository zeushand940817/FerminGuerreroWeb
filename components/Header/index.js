import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
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
 
}))

const Header = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const { width } = props

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12} container>
          <Grid item xs={3} md={2} lg={4}>
            <li className={classes.link}>
            <Link href="/" 
             as="/" 
             activeClassName="active"
             >
              <a>Fermin Guerrero</a>
            </Link>
            </li>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <li className={classes.link}>
            <Link 
            href="/graphicDesign" 
            as="/graphicDesign" 
            activeClassName="active"
            >  
              <a>Graphic Design</a>
            </Link>
              </li>
          </Grid>
          <Grid item xs={2} md={2} lg={1}>
            <li className={classes.link}>
           <Link 
           href="/all" 
           as="/all" 
           activeClassName="active"
           >
            <a>&</a>
           </Link>
           </li>
          </Grid>

          <Grid item xs={3} md={2} lg={4}>
            <li className={classes.link}>
            <Link 
            href="/typefaceDesign" 
            as="/typefaceDesign" 
            activeClassName="active"
            >
              <a>Typeface Desgin</a>
            </Link>
            </li>
          </Grid>

          <Grid className={classes.about} item xs={1} lg={1} md={2}>
            <li className={classes.link}>
            <Link 
            href="/about" 
            as="/about" 
            activeClassName="active"
            >
              <a>About</a>
            </Link>
            </li>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Header)
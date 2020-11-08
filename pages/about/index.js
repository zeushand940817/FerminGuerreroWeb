import Background from 'components/Background';
import Contact from 'components/Contact';
import Prensa from 'components/Prensa';
import Awards from 'components/Awards';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTop from 'components/ScrollTop';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        height: 30,
        alignItems: 'center',
        padding: '3px 30px 0px 30px',
      },
      span: {
        color: 'red',
      },
      image: {
        display: 'block',
        margin: 'auto',
        width: '100%',
      },
      li: {
        listStyle: 'none',
      },
      a: {
        textDecoration: 'none',
        color: 'black',
        width: '200px',
        background: 'yellow',
      },
      menuContainer: {
        display: 'flex',
      },
      sideNavContainer: {
        display: 'flex',
        width: '40%',
      },
    }))
    
    const About = () => {
      const classes = useStyles()
      
      return (
        <div className={classes.root}>

          <section> 
            <img className={classes.image}  src="/aboutmepicture.jpg" alt="ferminImage" />
          </section> 
     
          <section className="menuContainer">
            <ScrollTop showBelow={1300} />
            <Background />
            <Contact />
            <Prensa />
            <Awards />
          </section>
               
        </div>
      )
    }
export default About;
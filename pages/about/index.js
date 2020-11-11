import Background from 'components/Background';
import Contact from 'components/Contact';
import Prensa from 'components/Prensa';
import Awards from 'components/Awards';
import { makeStyles } from '@material-ui/core/styles';
import ScrollTop from 'components/ScrollTop';
import SideNav from 'components/SideNav';



    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        alignItems: 'center',
        padding: '3px 20px 0px 20px',
        display:'flex',
        flexWrap:'wrap',
      },
      span: {
        color: 'red',
      },
      section: {
        width:'100%',
      },
      image: {
        marginTop:40,
        display: 'block',
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
      sideNavContainer: {
        width:'15%',
      },
      menuContainer: {
        width:'85%',
      },

    }))
    
    const About = () => {
      const classes = useStyles();
      
      return (
        <div className={classes.root}>

          <section> 
            <img className={classes.image}  src="/aboutmepicture.jpg" alt="ferminImage" />
          </section> 
          <div className={classes.sideNavContainer}>
          <SideNav />
          </div>
          <section className={classes.menuContainer}>
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
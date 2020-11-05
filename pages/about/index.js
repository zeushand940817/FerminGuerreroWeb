import Background from 'components/Background'
import Contact from 'components/Contact'
import Prensa from 'components/Prensa'
import Awards from 'components/Awards'
import { makeStyles } from '@material-ui/core/styles'


    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        height: 30,
        alignItems: 'center',
      },

      span: {
        color: 'red',
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
      img:{
        width:'100%', 
        height: 'auto', 
        padding: '0px 20px 0px 20px',
      }
    }))
    
    const About = () => {
      const classes = useStyles()
      
      return (
        <div className={classes.root}>
         {/* <section> 
          <img className={classes.img}  src="/aboutmepicture.jpg" alt="ferminImage" />
        </section>  */}
    
          <section className="menuContainer">
            {/* <div>
              <SideNav />
            </div> */}
            <Background />
            <Contact />
            <Prensa />
            <Awards />
          </section>
        </div>
      )
    }
export default About;
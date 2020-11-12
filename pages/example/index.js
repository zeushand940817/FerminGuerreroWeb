import { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//components
import Background from 'components/Background';
import Contact from 'components/Contact';
import Prensa from 'components/Prensa';
import Awards from 'components/Awards';
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
  },
  sideNavContainer: {
    width:'15%',
  },
}))


function useOnScreen(options){
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if(ref.current){
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current){
        observer.unobserve(ref.current);
      }
    }

}, [ref, options]);  

  return [ref, visible];
}


export default function Example() {
  const [ref, visible] = useOnScreen({ threshold:0.9 });
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div>
        <img style={{ width: '100%', padding:'0px 20px 0px 20px' }} src='/aboutmepicture.jpg' />
      </div>

      <div
        ref={ref}
        style={{
          height: '100vh',
          position: visible ? 'relative' : 'sticky',
          transition: 'all .5s ease-in'
        }}
      >
        {visible ? (
   
        <div className={classes.sideNavContainer}>
          <SideNav />
          </div>
         ) : ( 
          null
        )}

    <section className={classes.menuContainer}>
            <Background />
            <Contact />
            <Prensa />
            <Awards />
          </section>
      </div>
    </div>


  );
}

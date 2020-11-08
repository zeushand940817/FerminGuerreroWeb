import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../ActiveLink';


const useStyles = makeStyles((theme) => ({
  nav:{
    top: 0,
    marginTop:5,

  },
  a:{
    textDecoration: 'none',
    fontSize: 20,
    color: 'white',
    display: 'block',
  }
}));

const SideNav = () => {
  const classes = useStyles();
  return(
    <div id="outer-container">
        <nav className={classes.nav} id="page-wrap">
          <a className={classes.a} href="#bckg">Background</a>
          <a className={classes.a} href="#contact">Contact</a>
          <a className={classes.a} href="#research">Reaserch, Papers & Articles</a>
          <a className={classes.a} href="#awards">Awards & Distinctions</a>
          <a className={classes.a} href="#exhibitions">Exhibitions</a>
       </nav> 
      </div>
  )
}
export default SideNav;
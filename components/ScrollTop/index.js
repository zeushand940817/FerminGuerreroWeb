import { useState, useEffect } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowRoundUp } from 'react-icons/io';


const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex:2,
    position:'fixed',
    bottom: '5vh',
    backgroundColor: 'none',
    size:22,
    color:'white',
    "&:hover, &Mui-focusVisible": {
      transition: '0.3s',
    },
    right: '5%',

  },
}))

const ScrollTop = ({
  showBelow
}) =>{
 
const classes = useStyles()

const [show, setShow]= useState(showBelow ? false : true)

useEffect(() =>{
  if(showBelow) {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
})

const handleScroll = () => {
  if(window.pageYOffset > showBelow){
    if (!show) setShow(true)
  }else{
    if (show) setShow(false)
  }
}

const handleClick = () => {
  window[`scrollTo`]({top: 990, behavior: 'smooth'})
}

  return (
    <>
    <div>
      {show &&
          <IoIosArrowRoundUp size={52} onClick={handleClick} className={classes.toTop} />
      }
    </div>  
    </>
  )
}

export default ScrollTop;


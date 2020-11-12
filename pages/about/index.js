import { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

//components
import Background from 'components/Background'
import Contact from 'components/Contact'
import Prensa from 'components/Prensa'
import Awards from 'components/Awards'
import SideNav from 'components/SideNav'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    padding: '3px 20px 0px 20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  span: {
    color: 'red',
  },
  section: {
    width: '100%',
  },
  image: {
    marginTop: 40,
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
    position: 'fixed',
    top: '40%',
    width: '15%',
  },
}))

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}

export default function Example() {
  const ref = useRef()
  const onScreen = useOnScreen(ref, '-50%')
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div style={{ height: '25%' }}>
        <img style={{ width: '100%' }} src="/aboutmepicture.jpg" />
      </div>

      {onScreen && (
        <div className={classes.sideNavContainer}>
          <SideNav />
        </div>
      )}

      <div
        ref={ref}
        style={{
          height: '100%',
          position: onScreen ? 'relative' : 'sticky',
          transition: 'all .5s ease-in',
        }}
      >
        <section className={classes.menuContainer}>
          <Background />
          <Contact />
          <Prensa />
          <Awards />
        </section>
      </div>
    </div>
  )
}
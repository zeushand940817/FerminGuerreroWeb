import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import withWidth from '@material-ui/core/withWidth'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    alignItems: 'center',
    padding: '3px 20px 5px 20px',
    borderBottom: '2px solid white',
    fontSize:20,
  },
  link: {
    textDecoration: 'none',
    color:'#EF6800'
  },
}))

const Header = (props) => {
  const router = useRouter()
  console.log(router)
  const classes = useStyles()
  const { width } = props

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item xs={12} container>
          <Grid item xs={3} md={2} lg={4}>
            <li>
            <Link href="/"  as="/" className={classes.link}>
              <a>Fermin Guerrero</a>
            </Link>
            </li>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <li>
            <Link href="/graphicDesign" as="/graphicDesign" className={classes.isActive}>
              {/* <a className={router.pathname === '/graphicDesign' ? "active" : " "}>  */}
              <a>Graphic Design</a>
              </Link>
              </li>
          </Grid>
          <Grid item xs={2} md={2} lg={1}>
            <li>
           <Link href="/all" as="/all" className={classes.link}>
            <a>&</a>
           </Link>
           </li>
          </Grid>

          <Grid item xs={3} md={2} lg={4}>
            <li>
            <Link href="/typefaceDesign" as="/typefaceDesign" className={classes.link}>
              <a>Typeface Desgin</a>
            </Link>
            </li>
          </Grid>

          <Grid className={classes.about} item xs={1} lg={1} md={2}>
            <li>
            <Link href="/about" as="/about" className={classes.link} >
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

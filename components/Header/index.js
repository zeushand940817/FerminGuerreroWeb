import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '../ActiveLink'

export default function Header(props) {
  return (
    <>
      <div className="headerWrapper">
        <Grid container direction="column">
          <Grid item xs={12} container>
            <Grid item xs={3} md={2} lg={4}>
              <Link href="/" as="/" activeClassName="active" passHref>
                <Box className="a " component="a">
                  Fermin Guerrero
                </Box>
              </Link>
            </Grid>
            <Grid item xs={3} md={2} lg={2}>
              <Link
                href="/graphicDesign"
                as="/graphicDesign"
                activeClassName="active"
                passHref
              >
                <Box className="a" component="a">
                  Graphic Design
                </Box>
              </Link>
            </Grid>
            <Grid item xs={2} md={2} lg={1}>
              <Link href="/all" as="/all" activeClassName="active" passHref>
                <Box className="a" component="a">
                  &
                </Box>
              </Link>
            </Grid>

            <Grid item xs={3} md={2} lg={4}>
              <Link
                href="/typefaceDesign"
                as="/typefaceDesign"
                activeClassName="active"
                passHref
              >
                <Box className="a" component="a">
                  {' '}
                  Typeface Desgin
                </Box>
              </Link>
            </Grid>

            <Grid item xs={1} lg={1} md={2}>
              <Link href="/about" as="/about" activeClassName="active" passHref>
                <Box className="a" component="a">
                  About
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <style jsx>{`
        .headerWrapper {
          width: 100%;
          height: 40px;
          align-items: center;
          justify-content: center;
          padding: 3px 20px 5px 20px;
          mix-blend-mode: difference;
          position: fixed;
          top: 0;
          z-index: 1;
          font-size: 20px;
          outline: none;
        }

        .a {
          text-decoration: none;
          outline: none;
        }
      `}</style>
    </>
  )
}

import Head from 'next/head'
import { useEffect } from 'react'

//Global styles
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

//Dynamic imports
import dynamic from 'next/dynamic'

//media queries
import device from 'utils/media-queries'

const DynamicHeader = dynamic(() => import('components/Header'))
const DynamicMobileMenu = dynamic(() => import('components/MobileMenu'))

export default function MyApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Fermin Guerrero</title>
        <meta
          property="og:title"
          content="Graphic Designer and Typography designer 's web page, works and projects"
          key="title"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <div className="main-app-wrapper">
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="desktop">
            <DynamicHeader />
          </div>
          <div className="mobile">
            <DynamicMobileMenu />
          </div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>

      <style jsx>{`
        .desktop {
          display: none;
        }
        .mobile {
          width: 100%;
          display: inline-block;
        }
        .hiddenMobile {
          display: none;
        }

        @media only Screen and ${device.tablet} {
          .desktop {
            display: none;
          }
          .mobile {
            width: 100%;
            display: inline-block;
          }
        }
        @media only Screen and ${device.desktop} {
          .main-app-wrapper {
            height: 100%;
            width: 100%;
          }
          .desktop {
            display: block;
          }
          .mobile {
            display: none;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

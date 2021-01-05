import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Header from 'components/Header'
import MobileMenu from 'components/MobileMenu'
import Footer from 'components/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
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
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="main-wrapper">
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="desktop">
            <Header />
          </div>
          <div className="mobile">
            <MobileMenu />
          </div>
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>

      <style jsx>{`
        .desktop {
          display: block;
        }
        .mobile {
          display: none;
        }

        @media only screen and (max-width: 677px) {
          .desktop {
            display: none;
          }
          .mobile {
            width: 100%;
            display: inline-block;
          }
        }

        @media screen and (max-width: 1024px) {
          .desktop {
            display: none;
          }
          .mobile {
            width: 100%;
            display: inline-block;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

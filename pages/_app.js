import Head from 'next/head'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

//Global styles
import '../styles/globals.scss'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../utils/theme'
import styles from 'styles/app.module.scss'

//Dynamic imports
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('components/Header'))
const Burger = dynamic(() => import('components/Burger'))

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

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
        <meta
          property="og:title"
          content="Graphic Designer and Typography designer 's web page, works and projects"
          key="title"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <div className={styles.mainAppWrapper}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <div className={styles.desktop}>
              <Header />
            </div>
            <div className={styles.mobile}>
              <Burger />
            </div>
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </React.Fragment>
  )
}

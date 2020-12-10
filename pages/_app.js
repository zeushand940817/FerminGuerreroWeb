import '../styles/globals.css'
import Header from 'components/Header'
import MobileMenu from 'components/MobileMenu'
import Footer from 'components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fermin Guerrero</title>
        <link rel="icon" href="/ferIcon.gif" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="desktop">
        <Header />
      </div>
      <div className="mobile">
        <MobileMenu />
      </div>
      <Component {...pageProps} />
      <Footer />

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
    </>
  )
}

export default MyApp

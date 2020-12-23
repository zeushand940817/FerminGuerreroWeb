import '../styles/globals.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'))
const MobileMenu = dynamic(import('../components/Header'))
const Footer = dynamic(import('../components/Footer'))

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

// export function reportWebVitals(metric) {
//   if (metric.label === 'custom') {
//     console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }

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

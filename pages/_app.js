import '../styles/globals.css';
import Header from 'components/Header';
import MobileMenu from '@components/MobileMenu';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <div className='desktop'>
    <Header />
  </div>
  <div className='mobile'>
    <MobileMenu />
  </div>
  <Component {...pageProps} />

  <style jsx>{`
  .desktop{
    display:block;
  } 
  .mobile{
    display:none;
  }
  @media screen and (max-width: 667px) {
    .desktop{
      display:none;
    }
    .mobile{
      display:block;
    }
  }


    `}</style>
  </>
  )
}

export default MyApp
import '../styles/globals.css';
import Header from 'components/Header';
import NewMobileMenu from '@components/NewMobileMenu';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <div className='desktop'>
    <Header />
  </div>
  <div className='mobile'>
    <NewMobileMenu />
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
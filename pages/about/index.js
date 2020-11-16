import Background from 'components/Background';
import SideNav from 'components/SideNav';
import Awards from 'components/Awards';
import Prensa from 'components/Prensa';
import Contact from 'components/Contact';


export default function About() {
  return(
  <>
  <div className='mainWrapper'>
    <img className='image' src="/aboutmepicture.jpg" />
  <div className="container">
  <div className="body">
    <div className="sidebar">
      <SideNav />
    </div>
    <div className="content">
      <Background />
      <Contact />
      <Awards />
      <Prensa />
    </div>
  </div>
</div>
</div>

    <style jsx>{`
   
    .mainWrapper {
    overflow:hidden;
    padding: 0px 20px 5px 20px;
    font-size:20px;
    }

    .container {
      height: calc(100vh - 50px);
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
    }

    .image{
      width:100%;
    }

    .body {
      display: grid;
      grid-template-columns: 1fr 5fr;
      overflow: hidden;
    }

    .content {
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
    
      `}</style>
    </>
  )
}

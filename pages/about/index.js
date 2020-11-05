import Background from 'components/Background'
import Contact from 'components/Contact'
import Prensa from 'components/Prensa'
import Awards from 'components/Awards'
import SideNav from '@components/SideNav'

const About = () => {
  return (
   <>
      {/* <section>
        <img className="imageAbout" src="/aboutmepicture.jpg" alt="ferminImage" />
      </section> */}
      <section className='aboutNav'>
       <SideNav />
       <section className='content'>
            <div className='background'>
              <Background />
            </div>
        </section>
        <section className='content'>
          <div className='contact'>
              <Contact />
          </div>
          </section>
          <section className='content'>
            <div className='prensa'>
             <Prensa />
            </div>
          </section>
          <section className='content'>
            <div className='awards'>
              <Awards />
            </div>
      </section>
 </section>

  <style jsx>{`
  .aboutNav{
    max-width: '100%';
    color:white;
    gap:10px;
    display:grid;
    grid-template-columns:repeat(12, 1fr);   
    padding: 3px 20px 0px 20px;
    font-size:20px;
  }
  
  .content{
    grid-column: 4/10;
  }
  .contact{

  }
  .background{
    
  }
  .awards{

  }
  .container{
    width:100vw;
  }


@media screen and (max-width: 667px) {
    .imageAbout{
      width:100vw;
    }
    .aboutNav{
      width:100vw;
      grid-column: 1/13;
      display:flex;
      flex-direction:column;
    }
    } 

  .imageAbout{
    max-width:100%;
    padding: 0px 20px 0px 20px;
    display:flex;
    justify-content:center;
  }
  `}</style>
  </>
  )
}
export default About;


// .content{
//   grid-column: 4/10;
// }
// .contact{
//   grid-column:4/10;
//   grid-row: 2/4;
// }
// .background{
//   grid-column:4/10;
//   grid-row: 2/4;
// }


export default function SideNav() {
  return(
    <>
    <div className="container" id="outer-container">
        <nav className="nav" id="page-wrap">
          <a href="#bckg">Background</a>
          <a  href="#contact">Contact</a>
          <a  href="#research">Reaserch, Papers & Articles</a>
          <a  href="#awards">Awards & Distinctions</a>
          <a  href="#exhibitions">Exhibitions</a>
       </nav> 
    </div>
    <style jsx>{`
        .container{
          
        }
        .nav{
          top: 0;
          margin-top:5px;
        }
        a{
          text-decoration: none;
          font-size: 20px;
          color: white;
          display: block;
        }
        @media screen and (max-width: 667px) {
          .container{
          position:relative;
          top:0px;
          margin-bottom:20px;
          }
        }
        `}</style>
      </>
  )
}

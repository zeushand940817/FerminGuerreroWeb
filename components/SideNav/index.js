export default function SideNav() {
  return(
    <>
    <div className="container" id="outer-container">
        <nav className="nav" id="page-wrap">
          <a href="#bckg">Background</a>
          <a href="#contact">Contact</a>
          <a href="#research">Reaserch, Papers & Articles</a>
          <a href="#awards">Awards & Distinctions</a>
          <a href="#exhibitions">Exhibitions</a>
       </nav> 
    </div>
    <style jsx>{`
        a{
          text-decoration: none;
          font-size: 20px;
          color: white;
          display: block;
        }

        `}</style>
      </>
  )
}

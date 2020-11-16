export default function SideNav() {
  return(
    <>
    <div className="container" id="outer-container">
        <nav className="nav" id="page-wrap">
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
          <a href="#awards">Awards & Distinctions</a>
          <a href="#research">Research & Articles</a>
          <a href="#exhibitions">Exhibitions</a>
       </nav> 
    </div>
    <style jsx>{`
      .container{
        margin-top:50px;
      }
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

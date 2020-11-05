const SideNav = () => {
  return(
    <>
      <nav id="page-wrap">
        <a href="#bckg">Background</a>
        <a href="#contact">Contact</a>
        <a href="#prensa">Reaserch, Papers & Articles</a>
        <a href="#awards">Awards & Distinctions</a>
        <a href="#exhibitions">Exhibitions</a>
      </nav> 

    <style jsx>{`
      nav{
      display: flex;
      flex-direction: column;
      grid-row: 1;
      grid-column: 1/4;
    }
    a{
      text-decoration:none;
      color:white;
    }

  @media screen and (max-width: 667px) {
    nav{
      
    }
  } 

  `}</style>
</>


  )
}
export default SideNav;

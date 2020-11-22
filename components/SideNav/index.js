import { useRouter } from 'next/router';
import Link from '../ActiveLink';


export default function SideNav() { 
  return(
    <>
    <div className="container" id="outer-container">
        <nav className="navbar" id="page-wrap">
        <Link href="#background" as="#background" activeClassName="active">
          <a>Background</a> 
        </Link>
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

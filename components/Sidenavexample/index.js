import Link from 'next/link';
import { useRouter} from 'next/router';


export default function SideNav() {
const router = useRouter();
 
  return(
    <>


  <div className="container" id="outer-container">
        <nav className="navbar" id="page-wrap">
       <li>
        <Link 
          href="/about#background" 
          as="/about#background" 
          >
          <a className={router.asPath === "/about#background" ? "active" : ""}>
            Background
          </a>
        </Link>
        </li>
        <Link 
          href="/about#contact" 
          as="/about#contact"
          >
          <a className={router.asPath === "/about#contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
        <Link 
          href="/about#awards" 
          as="/about#awards"
          >
          <a className={router.asPath === "/about#awards" ? "active" : ""}>
            Awards & Distinctions
          </a>
        </Link>
        <Link 
          href="/about#research" 
          as="/about#research"
          >
          <a className={router.asPath === "/about#research" ? "active" : ""}>
            Research & Articles
          </a>
        </Link>
        <Link 
          href="/about#exhibitions" 
          as="/about#exhibitions"
          >
          <a>Exhibitions</a>
        </Link>
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
          font-style:lighter; 
        }

        .active{
          color:yellow;
          font-style:bold;
          font-style:italic; 
          
        }
        `}</style>
      </>
  )
}


import Link from 'next/link'
import { useRouter } from 'next/router'



const Header = (props) => {
  const router = useRouter();

  return(
    <div>
    {/* <div className="mobile">
     <Burger />
      </div>  */}
     
    <header className="container">
      <Link href="/"  as="/" >
        <a className={router.pathname === '/' ? "active" : " "}>
          Fermin Guerrero
        </a>
      </Link>
      <Link href="/graphicDesign" as="/graphicDesign" >
        <a className={router.pathname === '/graphicDesign' ? "active" : " "}>
          Graphic Design
        </a>
      </Link>
      <Link href="/all" as="/all">
        <a className={router.pathname === '/all' ? "active" : " "} >
          &
        </a>
      </Link>
      <Link href="/typefaceDesign" as="/typefaceDesign" >
        <a className={router.pathname === '/typefaceDesign' ? "active" : " "}>
          Typeface Desgin
        </a>
      </Link>
      <Link href="/about" as="/about">
        <a className={router.pathname === '/about' ? "active" : " "}>
          About
        </a>
      </Link>

    </header>

    <style jsx>{`
        .container {
          height: 65;
          width: '100%';
          border-bottom: 2px solid white;
          color:white;
          gap:10px;
          display:grid;
          grid-template-columns:repeat(12, 1fr);
          grid-auto-rows: minmax(35px, auto);    
          padding: 3px 20px 0px 20px;
          font-size:20px;
        }
        a:nth-child(1){
          grid-row:1;
          grid-column: 1/4;
        }
        a:nth-child(2){
          grid-column: 4/7;
        }
        a:nth-child(3){
          grid-column: 7/8;
        }

        a:nth-child(4){
          grid-column: 8/10;
          margin:10;
        }
        a:nth-child(5){
          grid-column: 12/13;
        }

        active{
          color:red;
        }
        .mobile{
          display:none;
        }

        @media screen and (max-width: 667px) {
          .container{
            display:none;
          }
          .mobile{
            display:block;
          }
        }
      `}</style>
      <style jsx global>{`

      `}</style>
    </div>
        )
}


export default Header;

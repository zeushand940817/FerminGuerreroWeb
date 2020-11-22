import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';


export default function SideNav() {
//console.log(Router.asPath)
 const router = Router.asPath 

  return(
    <>
    <div className="container" id="outer-container">
        <nav className="navbar" id="page-wrap">
        <Link href="/about#background" as="/about#background">
          <a className={router === "/about#background" ? "active" : ""}>
            Background
          </a>
        </Link>
        <Link href="/about#contact" as="/about#contact">
          <a className={router === "/about#contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
        <Link href="/about#awards" as="/about#awards">
          <a className={router === "/about#awards" ? "active" : ""}>
            Awards & Distinctions
          </a>
        </Link>
        <Link href="/about#research" as="/about#research">
          <a className={router === "/about#research" ? "active" : ""}>
            Research & Articles
          </a>
        </Link>
        <Link href="/about#exhibitions" as="/about#exhibitions">
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


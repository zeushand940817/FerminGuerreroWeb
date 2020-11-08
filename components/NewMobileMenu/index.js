import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import Link from 'next/link';
import { useState } from 'react';


export default function NewMobileMenu() {
  const [open, setOpen] = useState(false);

 const handleClick = () => {
    setOpen(!open); 
  }

    return (
      <>
      <div className="burgerMainContainer" onClick={handleClick}>
        <div className="iconBurgerMenu">
        {open !== true ? 
          <HiOutlineMenuAlt4 size={52} /> 
           :  
         <VscChromeClose size={52} />
        }

        </div>
        <ul className={open !== true ? "linksBurgerMenuContainerInactive" : "linksBurgerMenuContainer"}>
          <li className="linksBurgerMenu">
            <Link href="/"  as="/" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleClick()}>Home</Link>
          </li>
          <li className="linksBurgerMenu">
            <Link href="/graphicDesign" as="/graphicDesign" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleClick()}>Graphic Design</Link>
          </li>
          <li className="linksBurgerMenu">
            <Link href="/typefaceDesign" as="/typefaceDesign" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() => this.handleClick()}>Typeface Design</Link>
          </li>
          <li className="linksBurgerMenu">
            <Link href="/about" as="/about" className="navMenuLinksBurger" activeClassName="activeLinkBurger" onClick={() =>this.handleClick()}>About</Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
      .burgerMainContainer {
        background-color: black;
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: flex-end;
        width: 100%;
        padding: 0;
        position: relative;
      }
      .iconBurgerMenu {
        position: relative;
        cursor: pointer;
      }
 
   .linksBurgerMenuContainer {
      position: absolute;
      width: 100vw;
      display: flex;
      flex-direction: column;
      list-style: none;
      left: 600;
      top: 30px;
      height: 40vh;
      z-index: 1000;
      justify-content: space-around;
      background-color: black;
      text-align:center;
      font-size:20px;
      color:white;
  }
    .linksBurgerMenu {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid white;
      width: 85%;
     
    }
      .navMenuLinksBurger {
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 10px;
      }
      a{
        list-style: none;
        color: white;
      }
      
      .activeLinkBurger {
        font-size: 20px;
        font-weight: bold;
        line-height: 26px;
        margin-bottom: 10px;
      }


  .linksBurgerMenuContainerInactive {
    z-index: 1000;
    position: absolute;
    left: -800px;
    top:30px;
    height: 40vh;
    display: flex;
    width: 100vw;
    transition: all .5s ease-in-out;
    flex-direction: column;
    list-style: none;
    justify-content: space-around;
  }
    .linksBurgerMenu {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid white;
      width: 85%;
    }
      .navMenuLinksBurger {
        font-size: 20px;
        font-weight: bold;
        line-height: 26px;
        margin-bottom: 10px;
      }
      .activeLinkBurger {
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 26px;
        margin-bottom: 10px;
      }

        `}</style>
      </>
    )
  }



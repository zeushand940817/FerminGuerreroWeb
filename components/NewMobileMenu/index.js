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
  
      <div className="burgerMainContainer"onClick={handleClick}>
        <div className="iconBurgerMenu">
        {open !== true ? 
          <HiOutlineMenuAlt4 size={32} /> 
           :  
         <VscChromeClose size={32} />
        }

        </div>
        <ul className={open !== true ?
           "linksBurgerMenuContainerInactive" 
           :
            "linksBurgerMenuContainer"}
        >
          <li className="linksBurgerMenu">
            <Link 
              href="/"  
              as="/" 
              className="navMenuLinksBurger" 
              onClick={() => this.handleClick()}>
                <a>Home</a>
            </Link>
          </li>

          <li className="linksBurgerMenu">
            <Link 
              href="/graphicDesign" 
              as="/graphicDesign" 
              className="navMenuLinksBurger" 
              onClick={() => this.handleClick()}>
                <a>Graphic Design</a>
            </Link>
          </li>

          <li className="linksBurgerMenu">
            <Link 
              href="/typefaceDesign" 
              as="/typefaceDesign" 
              className="navMenuLinksBurger" 
              onClick={() => this.handleClick()}>
                <a>Typeface Design</a>
            </Link>
          </li>

          <li className="linksBurgerMenu">
            <Link 
              href="/about" 
              as="/about" 
              className="navMenuLinksBurger" 
              onClick={() =>this.handleClick()}>
                <a>About</a>
            </Link>
          </li>
        </ul>
      </div>


      <style jsx>{`
       
      .burgerMainContainer {
        background-color: black;
        display: flex;
        flex-direction: row;
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
      height:40vh;
      display: flex;
      flex-direction: column;
      list-style: none;
      left: 600;
      top: 30px;
      z-index: 1000;
      justify-content: space-around;
      background-color: black;
      font-size:20px;
      color:white;
     
  }
    .linksBurgerMenu {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

      a{
        display:inline-block;
        list-style: none;
        color: white;
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
      width: 100%;
     
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



import { useState } from 'react'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

export default function NewMobileMenu() {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <nav className={isOpen == true ? 'mobile-menu' : 'mobile-menu-close'}>
        <Link href="/">
          <a className="home">Fermin Guerrero</a>
        </Link>
        <div className="burgerMainContainer" onClick={handleClick}>
          {/* <div
            onClick={handleClick}
            className={
              isOpen !== true ? 'iconBurgerMenuClose' : 'iconBurgerMenuOpen'
            }
          > */}
          <div className="burger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={21}
              color="white"
              onClick={handleClick}
            />
            {/* </div> */}
          </div>
        </div>
        <div
          className={
            isOpen !== true
              ? 'linksBurgerMenuContainerInactive'
              : 'linksBurgerMenuContainer'
          }
        >
          <ul>
            <li>
              <Link href="/graphicDesign" onClick={() => handleClick()}>
                <a>Graphic Design</a>
              </Link>
            </li>
            <li>
              <Link
                href="/all"
                as="/all-projects"
                onClick={() => handleClick()}
              >
                <a>&</a>
              </Link>
            </li>

            <li>
              <Link href="/typefaceDesign" onClick={() => handleClick()}>
                <a>Typeface Design</a>
              </Link>
            </li>

            <li>
              <Link href="/info" onClick={() => handleClick()}>
                <a>Info</a>
              </Link>
            </li>
          </ul>

          <div className="socialMedia">
            <span>
              <a
                className="social"
                href="https://www.instagram.com/ferminguerrero_design/"
                target="_blank"
              >
                <u>Instagram</u>
              </a>
            </span>
            <span>
              <a
                className="social"
                href="https://twitter.com/fermin_guerrero"
                target="_blank"
              >
                <u>Twitter</u>
              </a>
            </span>
            <span>
              <a
                className="social"
                href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
                target="_blank"
              >
                <u>Linkedin</u>
              </a>
            </span>
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: black;
          align-items: center;
        }

        .mobile-menu-close {
          mix-blend-mode: difference;
        }

        .home {
          color: white;
          font-size: 20px;
        }
      `}</style>
    </>
  )
}

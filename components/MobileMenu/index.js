import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import Link from 'next/link'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

export default function MobileMenu() {
  //const [open, setOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <section>
        <div className="burgerMainContainer" onClick={handleClick}>
          <div className="iconBurgerMenu">
            <li>
              <Link href="/" as="/home" onClick={() => this.handleClick()}>
                <a>Fermin Guerrero</a>
              </Link>
            </li>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <ul
            className={
              isOpen !== true
                ? 'linksBurgerMenuContainerInactive'
                : 'linksBurgerMenuContainer'
            }
          >
            <li>
              <Link
                href="/graphicDesign"
                as="/graphic-design"
                onClick={() => this.handleClick()}
              >
                <a>Graphic Design</a>
              </Link>
            </li>
            <li>
              <Link
                href="/all"
                as="/all-projects"
                onClick={() => this.handleClick()}
              >
                <a>&</a>
              </Link>
            </li>

            <li>
              <Link
                href="/typefaceDesign"
                as="/typeface-design"
                onClick={() => this.handleClick()}
              >
                <a>Typeface Design</a>
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                as="/about"
                onClick={() => this.handleClick()}
              >
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        section {
          position: absolute;
          top: 0;
          width: 100%;
          color: white;
          position: absolute;
          z-index: 1;
          background: black;
        }

        .burgerMainContainer {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;
          padding: 0;
          position: relative;
          transition: all 0.5s ease;
          mix-blend-mode: difference;
        }

        .iconBurgerMenu {
          position: relative;
          list-style: none;
          text-decoration: none;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 10px;
          padding-right: 10px;
          width: 100%;
        }

        .linksBurgerMenuContainer {
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          padding-left: 10px;
          padding-top: 50px;
          top: 25px;
          z-index: 1000;
          justify-content: left;
          font-size: 18px;
          line-height: 30px;
          background-color: black;
          height: 100vh;
          color: white;
        }
        a {
          display: inline-block;
          list-style: none;
          color: white;
        }

        .linksBurgerMenuContainerInactive {
          z-index: 1000;
          position: absolute;
          left: -1000px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import Link from 'next/link'
import { useState } from 'react'

export default function NewMobileMenu() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <section>
        <div className="burgerMainContainer" onClick={handleClick}>
          <div className="iconBurgerMenu">
            {open !== true ? (
              <HiOutlineMenuAlt4 size={32} />
            ) : (
              <VscChromeClose size={32} />
            )}
          </div>

          <ul
            className={
              open !== true
                ? 'linksBurgerMenuContainerInactive'
                : 'linksBurgerMenuContainer'
            }
          >
            <li>
              <Link href="/" as="/" onClick={() => this.handleClick()}>
                <a>Fermin Guerrero</a>
              </Link>
            </li>

            <li>
              <Link
                href="/graphicDesign"
                as="/graphicDesign"
                onClick={() => this.handleClick()}
              >
                <a>Graphic Design</a>
              </Link>
            </li>

            <li>
              <Link
                href="/typefaceDesign"
                as="/typefaceDesign"
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
          width: 100%;
          padding: 10px;
        }

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
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          left: 600;
          top: 15px;
          z-index: 1000;
          justify-content: space-around;
          background-color: black;
          font-size: 20px;
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

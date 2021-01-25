import Link from 'next/link'
import { useState } from 'react'

//Component
import { Spin as Hamburger } from 'hamburger-react'

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }
  const handleClickHome = () => {
    setOpen(false)
  }

  return (
    <>
      <section className={isOpen == true ? 'sectionOpen' : 'sectionClose'}>
        <Link href="/">
          <a
            className={isOpen !== true ? 'homeClose' : 'homeOpen'}
            onClick={() => handleClickHome()}
          >
            Fermin Guerrero
          </a>
        </Link>
        <div className="burgerMainContainer" onClick={handleClick}>
          <div
            onClick={handleClick}
            className={
              isOpen !== true ? 'iconBurgerMenuClose' : 'iconBurgerMenuOpen'
            }
          >
            <div className="burger">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={21}
                onClick={handleClick}
              />
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
        </div>
      </section>

      <style jsx>{`
        section {
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
          display: flex;
          justify-content: center;
          padding: 20px;
          align-items: center;
          background: black;
        }
        .sectionClose {
          mix-blend-mode: difference;
        }
        .burgerMainContainer {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          position: relative;
          mix-blend-mode: difference;
        }

        ul {
          padding: 0px;
        }
        .iconBurgerMenuClose {
          position: fixed;
          cursor: pointer;
          top: 0;
          right: 0;
        }
        .iconBurgerMenuOpen {
          position: fixed;
          font-size: 20px;
          cursor: pointer;
          background-color: black;
          top: 0;
          right: 0;
        }
        .homeClose {
          position: fixed;
          width: 100%;
          mix-blend-mode: difference;
          display: flex;
          align-items: center;
          padding-left: 20px;
        }
        .homeOpen {
          position: fixed;
          width: 100%;
          background: black;
          display: flex;
          align-items: center;
          padding-left: 20px;
          height: 50px;
        }
        .burger {
          color: white;
          display: flex;
          justify-content: flex-end;
          padding-right: 8px;
        }
        .linksBurgerMenuContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          z-index: 2;
          justify-content: left;
          font-size: 18px;
          background-color: black;
          color: white;
          padding-left: 20px;
          height: 50vh;
          display: flex;
          justify-content: space-between;
          position: fixed;
          top: 50;
          left: 0;
          margin-top: 25px;
        }
        a {
          display: inline-block;
          list-style: none;
          color: white;
          font-size: 20px;
        }
        li {
          padding-bottom: 5px;
        }
        .linksBurgerMenuContainerInactive {
          z-index: 2;
          position: absolute;
          top: -1000px;
          width: 100%;
        }
        .socialMedia {
          padding-bottom: 20px;
          background: black;
        }
        .social {
          padding-right: 20px;
          font-size: 18px;
        }
      `}</style>
    </>
  )
}

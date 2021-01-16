import Link from 'next/link'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <section>
        <Link href="/">
          <a className={isOpen !== true ? 'homeClose' : 'homeOpen'}>
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
                <Link href="/graphicDesign" onClick={() => this.handleClick()}>
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
                <Link href="/typefaceDesign" onClick={() => this.handleClick()}>
                  <a>Typeface Design</a>
                </Link>
              </li>

              <li>
                <Link href="/info" onClick={() => this.handleClick()}>
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
        }
        .burgerMainContainer {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding: 0;
          position: relative;
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
          font-size: 20px;
          padding: 15px;
          mix-blend-mode: difference;
        }

        .homeOpen {
          position: fixed;
          width: 100%;
          font-size: 20px;
          background: black;
          padding: 15px;
        }
        .burger {
          display: flex;
          justify-content: flex-end;
          padding: 8px;
          padding-right: 2px;
          padding-top: 5px;
        }
        .linksBurgerMenuContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          margin-top: 50px;
          z-index: 2;
          justify-content: left;
          font-size: 18px;
          background-color: black;
          color: white;
          padding-left: 15px;
          height: 50vh;
          width: 100vw;
          display: flex;
          justify-content: space-between;
          position: fixed;
          top: 50;
          left: 0;
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
          left: -1000px;
          width: 100%;
        }

        .socialMedia {
          padding-bottom: 20px;
        }
        .social {
          color: white;
          padding-right: 20px;
          font-size: 18px;
        }
      `}</style>
    </>
  )
}

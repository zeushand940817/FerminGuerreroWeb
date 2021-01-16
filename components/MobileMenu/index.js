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
        <div className="burgerMainContainer" onClick={handleClick}>
          <div
            className={
              isOpen !== true ? 'iconBurgerMenuClose' : 'iconBurgerMenuOpen'
            }
            onClick={handleClick}
          >
            <li>
              <Link href="/" as="/" onClick={() => this.handleClick()}>
                <a className="home">Fermin Guerrero</a>
              </Link>
            </li>
            <div className="burger">
              <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
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
                  href="/info"
                  as="/info"
                  onClick={() => this.handleClick()}
                >
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
          color: white;
          z-index: 1;
          height: 30px;
        }
        .burgerMainContainer {
          background: black;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;
          padding: 0;
          position: relative;
        }
        ul {
          padding: 0px;
        }

        .iconBurgerMenuClose {
          position: fixed;
          list-style: none;
          text-decoration: none;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 10px;
          width: 100%;
        }
        .iconBurgerMenuOpen {
          position: fixed;
          list-style: none;
          text-decoration: none;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 10px;
          width: 100%;
          background-color: black;
        }
        .home {
          width: 100%;
          font-size: 20px;
          padding-left: 15px;
        }
        .burger {
          width: 10%;
          font-size: 20px;
          padding-right: 45px;
        }
        .linksBurgerMenuContainer {
          position: fixed;
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          top: 45px;
          z-index: 2;
          justify-content: left;
          font-size: 18px;
          background-color: black;
          color: white;
          padding-left: 15px;
          height: 50%;
          display: flex;
          justify-content: space-between;
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

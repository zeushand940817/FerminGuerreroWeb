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
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
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
        }
        .burger {
          width: 10%;
        }
        .linksBurgerMenuContainer {
          position: fixed;
          width: 100%;
          display: flex;
          flex-direction: column;
          list-style: none;
          padding-left: 10px;
          padding-top: 50px;
          top: 25px;
          z-index: 2;
          justify-content: left;
          font-size: 18px;
          line-height: 30px;
          background-color: black;
          height: 677px;
          color: white;
        }
        a {
          display: inline-block;
          list-style: none;
          color: white;
          font-size: 24px;
          padding: 10px;
        }
        .linksBurgerMenuContainerInactive {
          z-index: 2;
          position: absolute;
          left: -1000px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

import Link from 'next/link'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const Mobile = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <nav className={isOpen == true ? 'mobile-menu' : 'mobile-menu-close'}>
        >
        <input
          type="checkbox"
          id="checkbox"
          className="mobile-menu__checkbox"
        />
        <Link href="/">
          <a className="homeContainer">Fermin Guerrero</a>
        </Link>
        <label for="checkbox" className="mobile-menu__btn">
          <Hamburger
            className="mobile-menu__icon"
            toggled={isOpen}
            toggle={setOpen}
            size={21}
            onClick={handleClick}
            color="white"
          />
        </label>
        <div className="mobile-menu__container">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <Link href="/graphicDesign">
                <a className="mobile-menu__link">Graphic Design</a>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link href="/all">
                <a className="mobile-menu__link">&</a>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link href="/typefaceDesign">
                <a className="mobile-menu__link">Typeface Design</a>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link href="/info">
                <a className="mobile-menu__link">Info</a>
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
        .mobile-menu {
          width: 100vw;
          position: fixed;
          padding: 20px;
          top: 0;
          background-color: black;
          left: 0;
          height: 50px;
          z-index: 9999999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
        }
        .mobile-menu-close {
          width: 100vw;
          position: fixed;
          padding: 20px;
          top: 0;
          background-color: none;
          mix-blend-mode: difference;
          left: 0;

          height: 50px;
          z-index: 9999999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
        }

        .homeContainer {
          position: absolute;
          font-size: 20px;
          left: 0;
          display: flex;
          justify-content: start;
          padding-left: 20px;
        }
        .social {
          color: white;
          padding-right: 10px;
        }
        .social:selected {
          color: white;
        }

        .mobile-menu__container {
          position: fixed;
          display: flex;
          flex-direction: column;
          align-items: left;
          padding-left: 20px;
          justify-content: space-around;
          top: 50px;
          left: 0;
          right: 0;
          z-index: 999;
          height: 0;
          opacity: 1;
          transition: 0.5s;
          transition-delay: 0.2s;
          overflow: hidden;
          background-color: black;
        }
        .mobile-menu__list {
          list-style: none;
          padding-left: 0;
          margin-top: -50px;
        }
        .mobile-menu__item {
          font-size: 20px;
          padding-bottom: 20px;
        }
        .mobile-menu__link {
          text-decoration: none;
          color: #fff;
        }
        .mobile-menu__checkbox {
          display: none;
        }
        .mobile-menu__checkbox:checked ~ .mobile-menu__nav {
          opacity: 1;
          transition-delay: 0s;
        }
        .mobile-menu__checkbox:checked ~ .mobile-menu__container {
          height: 70%;
          transition-delay: 0s;
        }
      `}</style>
    </>
  )
}

export default Mobile

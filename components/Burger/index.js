import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

//styles
import styles from 'styles/burger.module.scss'

export default function Burger() {
  const [isOpen, setOpen] = useState(false)

  const handleClickHome = () => {
    setOpen(false)
  }

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: '-60vh',
    },
  }
  return (
    <>
      <nav className={styles.nav}>
        <div
          className={
            isOpen
              ? `${styles.burgerContainer}`
              : `${styles.burgerContainerClose}`
          }
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={21}
            color="white"
          />
          <Link href="/">
            <a onClick={() => handleClickHome()}>Fermin Guerrero</a>
          </Link>
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? 'opened' : 'closed'}
          variants={menuVariants}
          transition={{ default: { duration: 1 } }}
          className={styles.menu}
        >
          <div className={styles.navigation}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/graphicDesign">
                  <a onClick={() => handleClickHome()} className={styles.a}>
                    Graphic Design
                  </a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/allProjects">
                  <a onClick={() => handleClickHome()} className={styles.a}>
                    &
                  </a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/typefaceDesign">
                  <a onClick={() => handleClickHome()} className={styles.a}>
                    Typeface Design
                  </a>
                </Link>
              </li>
              <li className={styles.lastLi}>
                <Link href="/info">
                  <a onClick={() => handleClickHome()} className={styles.lastA}>
                    Info
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.socialMedia}>
            <span>
              <a
                href="https://www.instagram.com/ferminguerrero_design/"
                target="_blank"
              >
                Instagram
              </a>
            </span>
            <span>
              <a href="https://twitter.com/fermin_guerrero" target="_blank">
                Twitter
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
                target="_blank"
              >
                Linkedin
              </a>
            </span>
          </div>
        </motion.div>
      </nav>
    </>
  )
}

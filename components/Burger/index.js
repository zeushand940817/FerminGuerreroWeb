import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { links, social } from '../../database/menuDB'

//styles
import styles from 'styles/burger.module.scss'

export default function Burger() {
  const [isOpen, setOpen] = useState(false)

  // const index = links[0].text

  //  if (index === 'Fermin Guerrero') {
  //    links.splice(index, 1)
  //  }

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
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li className={styles.li} key={id}>
                    <Link href={url}>
                      <a onClick={() => handleClickHome()} className={styles.a}>
                        {text}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.socialMedia}>
            {social.map((media) => {
              const { id, url, text } = media
              return (
                <span key={id}>
                  <a href={url} target="_blank">
                    {text}
                  </a>
                </span>
              )
            })}
          </div>
        </motion.div>
      </nav>
    </>
  )
}

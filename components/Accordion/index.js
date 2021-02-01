import { useState, useRef } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

//Styles
import styles from 'styles/accordion.module.scss'

function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')

    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active'
        ? `${styles.accordionIcon}`
        : `${styles.accordionIconRotate}`
    )
  }

  return (
    <>
      <div className={styles.accordionSection}>
        <button
          className={`{styles.accordion} ${setActive}`}
          onClick={toggleAccordion}
        >
          <p className={styles.accordionTitle}>{props.title}</p>
          <HiOutlineChevronDown
            className={`${setRotate}`}
            width={30}
            color="white"
          />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className={styles.accordionContent}
        >
          <div className={styles.accordionText}>{props.content}</div>
        </div>
      </div>
    </>
  )
}

export default Accordion

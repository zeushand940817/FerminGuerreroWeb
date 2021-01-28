import { useState, useRef } from 'react'

function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
  }

  return (
    <>
      <div className="accordionSection">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordionTitle">{props.title}</p>
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordionContent"
        >
          <div className="accordionText">{props.content}</div>
        </div>
      </div>
      <style jsx>{`
        .accordionSection {
          display: flex;
          flex-direction: column;
          font-size: 20px;
        }
        .accordion {
          background-color: black;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          border: none;
          outline: none;
          transition: all 0.6s ease;
          padding: 0px;
        }

        .accordionTitle {
          font-size: 20px;
        }

        .accordionTitle:hover,
        .active {
          font-weight: bold;
        }

        .accordionContent {
          background-color: black;
          color: white;
          overflow: hidden;
          transition: max-height 0.6s ease;
        }
      `}</style>
    </>
  )
}

export default Accordion

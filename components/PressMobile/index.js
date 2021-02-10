import styles from 'styles/infoSection.module.scss'

export default function PressMobile({ press }) {
  const pressWithoutTitle = Object.values(press).slice(1)

  return (
    <>
      <div className={styles.wrapper}>
        <h4>Print (selected):</h4>
        <section>
          {pressWithoutTitle.map((element) => (
            <>
              <p>{element.year}</p>
              <p>{element.description}</p>
            </>
          ))}
        </section>
      </div>
    </>
  )
}

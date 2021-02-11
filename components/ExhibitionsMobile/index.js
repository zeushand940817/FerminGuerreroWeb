import styles from 'styles/infoSection.module.scss'

export default function ExhibitionsMobile({ exhibitions }) {
  const exhibitionsMap = Object.values(exhibitions)
  return (
    <>
      <div className={styles.wrapper}>
        {exhibitionsMap.map((element) => (
          <section className={styles.section}>
            <p>{element.year}</p>
            <p>{element.title}</p>
            <p>{element.country}</p>
          </section>
        ))}
      </div>
    </>
  )
}

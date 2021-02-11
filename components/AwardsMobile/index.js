import styles from 'styles/infoSection.module.scss'

export default function AwardsMobile({ awardsData }) {
  const awards = Object.values(awardsData)
  return (
    <>
      <div className={styles.wrapper}>
        {awards.map((element) => (
          <section className={styles.section}>
            <p>{element.year}</p>
            <div className={styles.content}>
              <p>{element.title}</p>
              <p>{element.category}</p>
              <p>{element.project}</p>
              <p>{element.prize}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

import styles from 'styles/project.module.scss'

const Credits = ({ element }) => {
  return (
    <>
      {element.credits && (
        <p
          className={styles.middleText}
          dangerouslySetInnerHTML={{
            __html: element.credits,
          }}
        ></p>
      )}
    </>
  )
}
export default Credits

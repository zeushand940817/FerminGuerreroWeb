import Link from 'next/link'

//styles
import styles from 'styles/project.module.scss'

const Tags = ({ element }) => {
  return (
    <div className={styles.tagName}>
      {element.tags &&
        element.tags.map((tag) => {
          const transformName = tag.replace('-', ' ')
          return (
            <>
              <Link href={`/tag/${tag}`}>
                <a className={styles.tagLink}>
                  <u>{transformName}</u>
                </a>
              </Link>
            </>
          )
        })}
    </div>
  )
}

export default Tags

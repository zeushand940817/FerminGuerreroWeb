import { LazyLoadImage } from 'react-lazy-load-image-component'

//Styles
import styles from 'styles/project.module.scss'

const CoverImage = ({ element }) => {
  return (
    <>
      {element.mp4 ? (
        <video
          loop
          autoPlay
          muted
          playsinline
          webkit-playsinline
          controlsList="nofullscreen"
          className={styles.mainVideo}
        >
          <source src={element.mp4Slug} type="video/mp4" />
        </video>
      ) : (
        <div>
          <LazyLoadImage
            alt="graphic-design"
            src={element.imageSlag}
            width="800px"
            height="534px"
            className={styles.mainImage}
          />
        </div>
      )}
    </>
  )
}

export default CoverImage

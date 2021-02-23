import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

import styles from 'styles/project.module.scss'

const SocialMedia = ({ element }) => {
  return (
    <div className={styles.socialShare}>
      <FacebookIcon round={true} iconFillColor="white" />
      <LinkedinIcon round={true} iconFillColor="white" />
      <TwitterIcon round={true} iconFillColor="white" />
      <WhatsappIcon round={true} iconFillColor="white" />
    </div>
  )
}
export default SocialMedia

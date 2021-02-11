import dynamic from 'next/dynamic'

//Styles
import styles from 'styles/mobileSectionsMenu.module.scss'

//Component
import Accordion from 'components/Accordion'

//Dynamic imports
const About = dynamic(() => import('components/About'))
const Contact = dynamic(() => import('components/Contact'))
const ArticlesMobile = dynamic(() => import('components/ArticlesMobile'))
const AwardsMobile = dynamic(() => import('components/AwardsMobile'))
const ExhibitionsMobile = dynamic(() => import('components/ExhibitionsMobile'))
const PressMobile = dynamic(() => import('components/PressMobile'))

export default function MobileSectionsMenu({
  press,
  articles,
  exhibitions,
  awardsData,
  pressOnlineData,
}) {
  return (
    <>
      <div className={styles.mainWrapper}>
        <Accordion title="About" content={<About />} />
        <Accordion title="Contact" content={<Contact />} />
        <Accordion
          title="Press"
          content={
            <PressMobile press={press} pressOnlineData={pressOnlineData} />
          }
        />
        <Accordion
          title="Awards & Distinctions"
          content={<AwardsMobile awardsData={awardsData} />}
        />
        <Accordion
          title="Research & Articles"
          content={<ArticlesMobile articles={articles} />}
        />
        <Accordion
          title="Exhibitions"
          content={<ExhibitionsMobile exhibitions={exhibitions} />}
        />
      </div>
    </>
  )
}

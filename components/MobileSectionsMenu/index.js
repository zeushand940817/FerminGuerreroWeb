import Accordion from 'components/Accordion'
import dynamic from 'next/dynamic'

//Dynamic imports
const About = dynamic(() => import('@components/About'))
const Contact = dynamic(() => import('@components/Contact'))
const PressMobile = dynamic(() => import('@components/PressMobile'))
const AwardsMobile = dynamic(() => import('@components/AwardsMobile'))
const ExhibitionsMobile = dynamic(() => import('@components/ExhibitionsMobile'))

export default function MobileSectionsMenu() {
  return (
    <>
      <div>
        <Accordion title="About" content={<About />} />
        <Accordion title="Contact" content={<Contact />} />
        <Accordion title="Articles & papers" content={<PressMobile />} />
        <Accordion title="Exhibitions" content={<ExhibitionsMobile />} />
        <Accordion title="Awards" content={<AwardsMobile />} />
      </div>
    </>
  )
}

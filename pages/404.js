import Image from 'next/image'

import device from 'utils/media-queries'

export default function Custom404() {
  return (
    <>
      <div className="errorPage">
        <img src="/404.jpg" />
      </div>
      <style jsx>{`
        .errorPage {
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

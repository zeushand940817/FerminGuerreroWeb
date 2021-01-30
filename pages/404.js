import Image from 'next/image'

import device from 'utils/media-queries'

export default function Custom404() {
  return (
    <>
      <div
        className="errorPage"
        style={{
          backgroundImage: `url('/404.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <style jsx>{`
        .errorPage {
          width: 100vw;
          height: 100vh;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

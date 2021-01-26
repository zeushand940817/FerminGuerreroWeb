import { VscTools } from 'react-icons/vsc'
import device from 'utils/media-queries'

export default function Custom404() {
  return (
    <>
      <div>
        <VscTools color="white" size={30} />
        <h1>PAGE 404 NOT FOUND</h1>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 10px;
        }
        h1 {
          margin-left: 10px;
        }

        @media only Screen and ${device.tablet} {
          div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
        }
        @media only Screen and ${device.desktop} {
          div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
        }
      `}</style>
    </>
  )
}

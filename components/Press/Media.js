//Media queries
import device from 'utils/media-queries'

export default function Media({ image }) {
  return (
    <>
      <div className="container">
        {image && <img src={image} alt="article image" />}
      </div>
      <style jsx>{`
        img {
          width: 150px;
          height: auto;
          object-fit: contain;
          cursor: pointer;
          pointer-events: none;
          padding: 15px;
        }
        .container {
          height: 100px;
        }

        @media only Screen and ${device.tablet} {
          img {
            padding-left: 10px;
            width: 250px;
          }
        }
      `}</style>
    </>
  )
}

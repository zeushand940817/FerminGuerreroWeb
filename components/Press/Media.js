export default function Media({ image }) {
  return (
    <>
      <div className="container">
        {image && <img src={image} alt="article image" />}
      </div>
      <style jsx>{`
        img {
          width: 250px;
          object-fit: contain;
          cursor: pointer;
          pointer-events: none;
          padding-left: 10px;
        }
        .container {
          height: 100px;
        }
        @media screen and (max-width: 1024px) {
          img {
            padding: 15px;
          }
        }
      `}</style>
    </>
  )
}

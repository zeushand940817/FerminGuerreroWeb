export default function Media({ image }) {
  return (
    <>
      <div className="container">
        {image && <img src={image} alt="article image" />}
      </div>
      <style jsx>{`
        img {
          width: 300px;
          height: auto;
          object-fit: contain;
          cursor: pointer;
          pointer-events: none;
          padding: 15px;
        }
        .container {
          height: 100px;
        }
      `}</style>
    </>
  )
}

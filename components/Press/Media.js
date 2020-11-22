export default function ({ image }) {
  return (
    <>
     <div className="container">
        {image && <img src={image} alt="article image" />}
      </div>
      <style jsx>{`
        img {
          width: 200px;
          object-fit: contain;
          cursor: pointer;
          pointer-events: none;
        } 
        .container {
          height: 100px;
        }
      `}</style>
    </>

  )
}
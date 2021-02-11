export default function PressMobile({ press }) {
  const pressWithoutTitle = Object.values(press).slice(1)

  return (
    <>
      <div className="wrapper">
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          Print (selected):
        </div>
        <section>
          {pressWithoutTitle.map((element) => (
            <div className="individualPress">
              <p>{element.year}</p>
              <p>{element.description}</p>
              <p>{element.description2}</p>
            </div>
          ))}
        </section>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          margin-bottom: 20px;
        }
        .individualPress {
          margin-bottom: 20px;
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

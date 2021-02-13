export default function PressMobile({ press, pressOnlineData }) {
  const pressData = Object.values(press)
  const onlinePressData = Object.values(pressOnlineData)

  return (
    <>
      <div className="wrapper">
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          Print (selected):
        </div>
        <section>
          {pressData.map((element) => (
            <div className="individualPress">
              <p>{element.year}</p>
              <p>{element.description}</p>
              <p>{element.description2}</p>
            </div>
          ))}
        </section>
      </div>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        Online (selected):
      </div>
      <section>
        {onlinePressData.map((element) => (
          <div className="individualPress">
            <p>{element.year}</p>
            <a href={element.url} target="_blank" rel="noreferrer">
              <p>{element.title}</p>
            </a>
          </div>
        ))}
      </section>

      <style jsx>{`
        .wrapper {
          width: 100%;
          margin-bottom: 20px;
        }
        .individualPress {
          margin-bottom: 20px;
          line-height: 1.4;
        }
        a {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

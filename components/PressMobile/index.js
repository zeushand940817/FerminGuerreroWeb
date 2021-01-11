function PressMobile(props) {
  return (
    <>
      <div className="pressMobileWrapper">
        <div className="individualPress">
          <span> &#x2013;</span>
          <div className="textLink">
            <a
              href="https://medium.com/@Colophon/brick-a-new-font-brewing-e2a982e39c8f"
              target="_blank"
            >
              <u>Brick; a New Font Brewing</u>
            </a>
          </div>
        </div>

        <div className="individualPress">
          <span> &#x2013;</span>
          <div className="textLink">
            <a
              href="https://ilovetypography.com/2017/01/30/thesaurus-fonts/"
              target="_blank"
            >
              <u>Thesaurus's development.</u>
            </a>
          </div>
        </div>

        <div className="individualPress">
          <span> &#x2013;</span>
          <div className="textLink">
            <a
              href="/AninsideLookAtTheCreationProcessOfExentra.pdf"
              target="_blank"
            >
              <u>
                Monograms, A study of the development of monograms: From Ancient
                Greek coins to contemporary logos.
              </u>
            </a>
            <p>MATD’s dissertation.</p>
          </div>
        </div>

        <div className="individualPress">
          <span> &#x2013;</span>
          <div className="textLink">
            <a href="/BachelorThesis.pdf" target="_blank">
              <u>An inside look at the creation process of Exentra.</u>
            </a>
            <p>MATD’s Reflection on Practice.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pressMobileWrapper {
          color: white;
          font-size: 18px;
          margin-top: 10px;
        }
        .textLink {
          padding-left: 8px;
          padding-bottom: 5px;
        }
        a {
          text-decoration: none;
          color: white;
        }

        .individualPress {
          display: flex;
        }
      `}</style>
    </>
  )
}

export default PressMobile

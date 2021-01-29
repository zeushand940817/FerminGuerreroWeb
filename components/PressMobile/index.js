function PressMobile(props) {
  return (
    <>
      <div className="pressMobileWrapper">
        <div className="textLink">
          <a
            href="https://medium.com/@Colophon/brick-a-new-font-brewing-e2a982e39c8f"
            target="_blank"
          >
            <u>Brick; a New Font Brewing</u>
          </a>
        </div>

        <div className="textLink">
          <a
            href="https://ilovetypography.com/2017/01/30/thesaurus-fonts/"
            target="_blank"
          >
            <u>Thesaurus's development.</u>
          </a>
        </div>

        <div className="textLink">
          <a
            href="/AninsideLookAtTheCreationProcessOfExentra.pdf"
            target="_blank"
          >
            <u>
              Monograms, A study of the development of monograms: From Ancient
              Greek coins to contemporary logos.
            </u>
          </a>{' '}
          <span>MATD’s dissertation.</span>
        </div>

        <div className="textLink">
          <a href="/BachelorThesis.pdf" target="_blank">
            <u>An inside look at the creation process of Exentra.</u>
          </a>{' '}
          <span>MATD’s Reflection on Practice.</span>
        </div>
      </div>

      <style jsx>{`
        .pressMobileWrapper {
          color: white;
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .textLink {
          padding-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  )
}

export default PressMobile

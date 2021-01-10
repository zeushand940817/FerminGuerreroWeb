function PressMobile(props) {
  return (
    <>
      <div className="pressMobileWrapper">
        <div className="individualPress">
          <span> &#x2013;</span>
          <a
            href="https://medium.com/@Colophon/brick-a-new-font-brewing-e2a982e39c8f"
            target="_blank"
          >
            <u>Brick; a New Font Brewing</u>
          </a>
        </div>
        <div className="individualPress">
          <span> &#x2013;</span>
          <a
            href="https://ilovetypography.com/2017/01/30/thesaurus-fonts/"
            target="_blank"
          >
            <u>Thesaurus's development.</u>
          </a>
        </div>
        <div className="individualPress">
          <span> &#x2013;</span>
          <a href="" target="_blank">
            <u>
              Monograms, A study of the development of monograms: From Ancient
              Greek coins to contemporary logos.
            </u>
          </a>
          <p>MATD’s dissertation.</p>
        </div>
        <div className="individualPress">
          <span> &#x2013;</span>
          <a href="" target="_blank">
            <u>An inside look at the creation process of Exentra.</u>
          </a>
          <p>MATD’s Reflection on Practice.</p>
        </div>
      </div>

      <style jsx>{`
        .pressMobileWrapper {
          color: white;
        }
        a {
          text-decoration: none;
        }

        .individualPress {
        }
      `}</style>
    </>
  )
}

export default PressMobile

export default function ExhibitionsMobile() {
  return (
    <>
      <div className="exhibitionsContainer">
        <section>
          <p>2018</p>
          <p>Latin-American typedesign biennial organized by Typos Latinos.</p>
          <p>Bogotá, Colombia.</p>
        </section>
        <section>
          <p>2016</p>
          <p>
            Type Masters Exhibition organized by the Berliner Typostammtisch.
          </p>
          <p>Berlin, Germany.</p>
        </section>
        <section>
          <p>2015</p>
          <div className="individualPrize">
            <p>
              50 Diplômes exhibition organized by Étapes magazine and RedBull
              Studios.
            </p>
            <p>Paris, France.</p>
          </div>
          <div className="individualPrize">
            <p>Trnava Poster Triennial.</p>
            <p>Bratislava, Slovakia.</p>
          </div>
          <div className="individualPrize">
            <p>
              World’s best poster designers 2015, International Invitational
              Exhibition. Organized by Guan Shanyue Art Museum.
            </p>
            <p>Beijing, China.</p>
          </div>
        </section>
        <section>
          <p>2013</p>
          <p>100 typographic posters International Invitational Exhibition.</p>
          <p>Bogotá, Colombia.</p>
        </section>
        <section>
          <p>2011</p>
          <p>Weltformat Poster Festival.</p>
          <p>Lucerne, Switzerland.</p>
        </section>
      </div>

      <style jsx>{`
        .exhibitionsContainer {
          width: 100%;
        }
        section {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .individualPrize {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export default function AwardsMobile() {
  return (
    <>
      <div className="awardsContainer">
        <section>
          <p>2019</p>
          <div className="content">
            <p>LAD - Latin Design Awards.</p>
            <p>Typeface design category.</p>
            <p> Project: Thesaurus.</p>
            <p>Prize: Gold.</p>
          </div>
        </section>
        <section>
          <p>2018</p>
          <div className="content">
            <p>European Design Awards.</p>
            <p> Typeface design category. </p>
            <p>Project: Thesaurus.</p>
            <p> Prize: Gold.</p>
          </div>
          <div className="content">
            <p>
              Swiss Typefaces selected Thesaurus for their 40 pages specimen
              called Type Life 3, showcasing 19 non-SWTY typefaces they like.
            </p>
            
          </div>
          <div className="content">
            <p> Type 4: Typeface Design Competition by Graphis magazine.</p>
            <p>Project: Thesaurus. </p>
            <p>Prize: Gold.</p>
          </div>

          <div className="content">
            <p>Latin-American typedesign biennial (Tipos Latinos).</p>
            <p> Superfamily category Project: Thesaurus.</p>
            <p>Prize: Mention of Exellence (First Prize).</p>
          </div>
        </section>
        <section>
          <p>2015</p>
          <div className="content">
            <p>Trnava Poster Triennial International competition.</p>
            <p>Project: New Year, New Fight.</p>
            <p> Prize: Honorary mention.</p>
          </div>
        </section>
        <section>
          <p>2014</p>
          <div className="content">
            <p>
              Rolex's Foundation (Hans Wilsdorf) awarded me their schoolarship
              for my BA graduate project.
            </p>
            <p>BEA fondation award for young artists.</p>
          </div>
        </section>
      </div>
      <style jsx>{`
        .awardsContainer {
          width: 100%;
          margin-bottom: 20px;
        }
        section {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .content {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}

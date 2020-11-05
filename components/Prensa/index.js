const Prensa = () => {
  return (
    <>
    <section>
      <div className='individualContainer' id="prensa">
        <p>2020</p>
        <p>Brick; A New Font Brewing. Published at Medium.</p>
      </div>
      <div className='individualContainer'>
        <p>2017</p>
        <p>Thesaurus’s development. Published at I Love Typography.</p>
      </div>
      <div className='individualContainer'>
        <p>2015</p>
        <p>A study of the development of monograms: from Ancient Greek
          coins to contemporary logos. MATD’s dissertation. Published in
          Academia.
        </p>
      </div>
      <div className='individualContainer'>
        <p>
          An inside look at the creation process of Exentra. MATD’s R.O.P.
          (reflection on practice).
        </p>
      </div>
      <div className='individualContainer'>
        <p>2014</p>
        <p>If Geneva was a typeface. Bachelor thesis at HEAD.</p>
      </div>

    </section>
  
  <style jsx>{`
    section{
      grid-template-columns:repeat(12, 1fr); 
    }
    .individualContainer{
      display:flex;
      flex-direction:row;
    }

    @media screen and (max-width: 667px) {

        } 

      `}</style>
    </>
  )
}
export default Prensa;

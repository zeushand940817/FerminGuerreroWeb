const Contact = () => {

  return (
    <div className='contactContainer' id="contact">
      <section className='one'>
          Email 
      </section>
      <section className='eadress'>
          contact@ferminguerrero.com
      </section>

      <section className='two'>
          Dubai, UAE.
      </section>

      <section className='three'>
        Clock 17:35pm.
      </section>

      <section className='four'>
        <ul>
          <li>
          <a href="https://www.instagram.com/ferminguerrero_design/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/fermin_guerrero" target="_blank">
          Twitter
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fermin-guerrero-616237173/" target="_blank">
          Linkedin
          </a>
        </li>
      </ul>
  </section>
    
    <style jsx>{`
    
    .contactContainer{
      display:grid;
      grid-template-columns: repeat(3, 3fr);
      padding-top:50px;
    }
    .one{
    }
    .two{
      grid-column: 1;
    }
    .three{
      grid-column: 1;
    }
    .four{
      grid-column: 1;
    }
    a{
      text-decoration:none;
      color:white;
    }
    ul{
      padding:0;
      list-style:none;
    }

  `}</style>

  </div>
  )
}
export default Contact;

//grid-template-columns:repeat(6, 1fr); 

// grid-template:1fr 1fr 5fr/ 1fr 3fr
// grid-column: 2/10;
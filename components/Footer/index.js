//Media queries
import device from 'utils/media-queries'

export default function Footer({ component }) {
  return (
    <>
      <footer
        className={component === 'home' ? 'footerHome' : 'footerComponent'}
      >
        <div className="copyright">
          ©2021 <span>&#8212; </span> Fermin Guerrero
        </div>
        <div className="developer">
          Developed by{' '}
          <a
            className="lauraLink"
            href="https://lauradiaz.vercel.app/"
            target="_blank"
          >
            <u>Laura Diaz</u>
          </a>
        </div>

        <div className="twitter">
          <a
            className="social"
            href="https://twitter.com/fermin_guerrero"
            target="_blank"
          >
            <u>Twitter</u>
          </a>
        </div>
        <div className="instagram">
          <a
            className="social"
            href="https://www.instagram.com/ferminguerrero_design/"
            target="_blank"
          >
            <u>Instagram</u>
          </a>
        </div>
        <div className="linkedin">
          <a
            className="social"
            href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
            target="_blank"
          >
            <u>Linkedin</u>
          </a>
        </div>
      </footer>

      <style jsx>{`
         .footerHome{
           display:none;
         }

         .footerComponent{
          color:white;
          display:grid; 
          grid-template-columns: 2;
          grid-template-rows:3;
          padding:0px 10px 10px 10px;
        }

        .copyright {
          grid-column: 1;
          grid-row:1;
          color:white;
        }

        .developer {
          grid-column: 1;
          grid-row:2;
          color: #424242;
        }

        .twitter {
          text-align:right;
          grid-column: 2;
          grid-row: 1;
        }

        .instagram {
          text-align:right;
          grid-column: 2;
          grid-row: 2;
        }
       .linkedin {
        text-align:right;
        grid-column: 2;
        grid-row: 3;
        }

         a {
          outline: none;
          color: white;
        }

        a:visited {
          color:white;
        }

        .developer, .lauraLink {
          color: #424242 !important;
          text-decoration: none;
          font-size:16px;
        }

    
        @media only Screen and ${device.tablet} {
          .footerHome {
            display:none;
          }
        }

        @media only Screen and ${device.desktop} {
        .footerHome {
          padding: 0px 20px 0px 20px;
          width: 100%;
          height: 40px;
          mix-blend-mode: difference;
          background: none;
          bottom: 0;
          z-index: 1;
          font-size: 20px;
          outline: none;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1;
          font-size: 20px;
          color: white;
          position: fixed;
        }
        .footerComponent{
          width: 100%;
          height: 40px;
          background: none;
          bottom: 0;
          font-size: 20px;
          outline: none;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1;
          font-size: 20px;
          color: white; 
        }

        .copyright {
          grid-column: 1/5;
          grid-row:1;
          color:white;
        }

        .developer {
          grid-column: 5/10;
          grid-row:1;
          padding-left: 3px;
          color: #424242;
        }
        .twitter {
          grid-column: 10;
            grid-row:1;
        }

        .instagram {
          grid-column: 11;
          grid-row:1;
        }
       .linkedin {
          grid-column: 12;
          grid-row:1;
          text-align: right;
        }
      
        .developer, .lauraLink {
          color: #424242 !important;
          text-decoration: none;
          font-size:20px;
        }
       
      `}</style>
    </>
  )
}

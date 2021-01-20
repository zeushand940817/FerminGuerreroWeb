//Media queries
import device from 'utils/media-queries'

export default function Footer({ component }) {
  return (
    <>
      <footer
        className={component === 'home' ? 'footerHome' : 'footerComponent'}
      >
        <div>
          ©2021 <span>&#8212; </span> Fermin Guerrero
        </div>
        <div>
          Developed by{' '}
          <a
            className="lauraLink"
            href="https://lauradiaz.vercel.app/"
            target="_blank"
          >
            <u>Laura Diaz</u>
          </a>
        </div>

        <div>
          <a
            className="social"
            href="https://twitter.com/fermin_guerrero"
            target="_blank"
          >
            <u>Twitter</u>
          </a>
        </div>
        <div>
          <a
            className="social"
            href="https://www.instagram.com/ferminguerrero_design/"
            target="_blank"
          >
            <u>Instagram</u>
          </a>
        </div>
        <div>
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
          display:flex;
          flex-direction:column;
        }
         a {
          outline: none;
          color: white;
        }

        a:visited {
          color:white;
        }
        .lauraLink {}

        div:nth-child(2) {
          color: #666666;
          
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

        div:nth-child(1) {
          grid-column: 1/5;
        }
        div:nth-child(2) {
          grid-column: 5/10;
          padding-left: 3px;
          color: #424242;
        }
        div:nth-child(3) {
          grid-column: 10;
        }

        div:nth-child(4) {
          grid-column: 11;
        }
        div:nth-child(5) {
          grid-column: 12;
          text-align: right;
        }

        div:nth-child(6) {
          grid-column: 12;
          text-align: right;
        }
      
        .lauraLink {
          color: #424242 !important;
          text-decoration: none;
          font-size:20px;
        }

        .developer{
          display:none;
        }
       
      `}</style>
    </>
  )
}

//Media queries
import device from 'utils/media-queries'

export default function Footer({ component }) {
  return (
    <>
      <footer
        className={component === 'home' ? 'footerHome' : 'footerComponent'}
      >
        <div>©2021 - Fermin Guerrero</div>
        <div>
          Developed by{' '}
          <a
            className="lauraLink"
            href="https://lauradiaz.vercel.app/"
            target="_blank"
          >
            <u>Laura Diaz.</u>
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
        footer {
          left: 0;
          bottom: 0;
          width: 100%;
          color: white;
          font-size: 16px;
          display: flex;
          flex-direction: row;
        }
        .footerHome {
          display: none;
        }
        .social {
          display: none;
        }
        a {
          color: white;
        }

        div:nth-child(2) {
          color: #666666;
        }
        .footerHome {
          display: none;
        }

        @media only Screen and ${device.tablet} {
          footer {
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
          }
          .footerHome {
            position: fixed;
          }
          .social {
            display: block;
          }

          div:nth-child(1) {
            grid-column: 1/5;
          }
          div:nth-child(2) {
            grid-column: 5/10;
            padding-left: 3px;
            color: #666666;
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

          a {
            text-decoration: none;
            outline: none;
            color: white;
          }
          .lauraLink {
            color: #666666;
            text-decoration: none;
          }
          .footerHome {
            display: flex;
          }
        }
      `}</style>
    </>
  )
}

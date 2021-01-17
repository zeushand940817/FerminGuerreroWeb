// import { IoCode } from 'react-icons/Io'

export default function Footer() {
  return (
    <>
      <footer>
        <div>©2021 - Fermin Guerrero</div>
        <div>
          Web development:
          <a
            className="lauraLink"
            href="https://lauradiaz.vercel.app/"
            target="_blank"
          >
            Laura.
          </a>
        </div>

        <div>
          <a href="https://twitter.com/fermin_guerrero" target="_blank">
            Twitter
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/ferminguerrero_design/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/fermin-guerrero-616237173/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 40px;
          mix-blend-mode: difference;
          align-items: center;
          justify-content: center;
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

        @media screen and (max-width: 667px) {
          footer {
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            font-size: 16px;
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

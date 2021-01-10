export default function Footer() {
  return (
    <>
      <footer>
        <div className="footermove">Fermin Guerrero</div>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          bottom: 0;
          background-color: transparent;
          mix-blend-mode: difference;
          position: fixed;
          padding: 10px 20px 10px 20px;
        }

        @media screen and (max-width: 667px) {
          footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            font-size: 16px;
          }
        }

        .footermove {
          width: 100%;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          animation: moveSlideshow 5s linear infinite;
          font-size: 24px;
          color: white;
        }
        @keyframes moveSlideshow {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes move-left {
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}

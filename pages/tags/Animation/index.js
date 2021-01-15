import fetch from 'isomorphic-unfetch'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Animation({ data }) {
  const getAllTags = data
    .sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year)
    })
    .map(({ tags, image, mp4Video, mp4, img1 }) => ({
      tags,
      image,
      mp4Video,
      mp4,
      img1,
    }))

  const animation = getAllTags.filter(
    (project) => project.tags && project.tags.includes('Animation')
  )

  return (
    <>
      <div className="animationWrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={2} gutter={3}>
            {animation.map((elem) => (
              <div>
                <img className="mainImage" src={elem.image} />
                {elem.mp4 && (
                  <video autoPlay muted loop width="100%" height="auto">
                    <source src={elem.mp4Video} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <style jsx>{`
        .animationWrapper {
          width: 100%;
          padding: 40px 10px 0px 10px;
        }
        img {
          padding-left: 10px;
          padding-bottom: 4px;
          width: 100%;
          height: 100%;
        }
        video {
          margin-top: -23px;
          padding-left: 10px;
          padding-bottom: 4px;
          width: 100%;
          height: 100%;
        }
        
        /* media queries */
        @media only screen and (min-width:375px) and (max-width:677px) and (orientation:portrait){
          .visualIdentityWrapper {
            width: 100%;
            padding: 10px 0px 0px 0px;
          }
          img {
            padding: 0px 0px 0px 0px;
            width: 100%;
            height: 100%;
          }
          video {
            padding: 0px 0px 0px 0px;
            padding: 0px;
            width: 100%;
            height: 100%;
          }
        }
        @media screen and (max-width: 1024px) {
          .visualIdentityWrapper {
            width: 100%;
            padding: 10px 10px 10px 10px;
          }
          img {
            padding-left: 5px;
            padding-bottom: 0px;
            padding-top:0px;
            padding-right:0px;
            width: 100%;
            height: 100%;
          }
          video {
            padding-left: 5px;
            padding-bottom: 0px;
            padding-top:0px;
            padding-right:0px;
            width: 100%;
            height: 100%;
          }
        }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/projects`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

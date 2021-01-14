import fetch from 'isomorphic-unfetch'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Animation({ data }) {
  const getAllTags = data
    .sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year)
    })
    .map(({ tags, image, name, horizontal, mp4, mp4Video, img1 }) => ({
      tags,
      image,
      img1,
      name,
      horizontal,
      mp4,
      mp4Video,
    }))

  const animation = getAllTags.filter(
    (project) => project.tags && project.tags.includes('Animation')
  )

  return (
    <>
      <div className="animationMainWrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter={4}>
            {animation.map((elem) => (
              <div>
                {elem.horizontal == true ? (
                  <img src={elem.image} />
                ) : (
                  <img src={elem.img1} />
                )}

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
        .animationMainWrapper {
          width: 100%;
          padding: 40px 0px 0px 0px;
        }
        img {
          padding-left: 10px;
          padding-bottom: 4px;
          width: 100%;
          height: 100%;
        }
        video {
          padding-left: 10px;
          padding-bottom: 4px;
          width: 100%;
          height: 100%;
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

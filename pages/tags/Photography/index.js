import fetch from 'isomorphic-unfetch'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Photography({ data }) {
  const getAllTags = data
    .sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year)
    })
    .map(({ tags, image, name, horizontal, mp41, mp4, img1 }) => ({
      tags,
      image,
      name,
      horizontal,
      mp41,
      mp4,
      img1,
    }))

  const photography = getAllTags.filter(
    (project) => project.tags && project.tags.includes('Photography')
  )

  return (
    <>
      <div className="photographyMainWrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter={4}>
            {photography.map((elem) => (
              <div>
                {elem.horizontal && (
                  <img className="mainImage" src={elem.image} />
                )}
                {!data.horizontal && (
                  <img className="mainImage" src={elem.img1} />
                )}
                {elem.mp4 && (
                  <video autoPlay muted loop width="100%" height="auto">
                    <source src={elem.mp41} type="video/mp4" />
                  </video>
                )}
                <div>{elem.name}</div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <style jsx>{`
        .photographyMainWrapper {
          width: 100%;
          padding: 40px 0px 0px 0px;
        }
        img {
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

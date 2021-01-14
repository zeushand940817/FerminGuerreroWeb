import fetch from 'isomorphic-unfetch'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Poster({ data }) {
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

  const poster = getAllTags.filter(
    (project) => project.tags && project.tags.includes('Poster')
  )

  return (
    <>
      <div className="posterMainWrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter={4}>
            {poster.map((elem) => (
              <div>
                {!elem.horizontal == false ? (
                  <img className="mainImage" src={elem.img1} />
                ) : (
                  <img className="mainImage" src={elem.image} />
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
        .posterMainWrapper {
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

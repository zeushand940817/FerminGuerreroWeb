import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Tags({ data }) {
  const router = useRouter()
  const tagParam = router.query.tag

  const allTags = data.map(({ tags, image }) => ({
    tags,
    image,
  }))

  const posterTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Poster')
  )

  const visualTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Visual-Identity')
  )
  console.log(visualTag, 'SOY VISUAL TAG')

  const illustrationTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Illustration')
  )

  const animationTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Animation')
  )

  const photoTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Photography')
  )

  const packagingTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Packaging')
  )

  const editorialTag = allTags.filter(
    (project) => project.tags && project.tags.includes('Editorial')
  )

  function renderComponent() {
    const tagParam = router.query.tag
    if (tagParam === 'Visual-Identity') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {visualTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Poster') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {posterTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Illustration') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {illustrationTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Editorial') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {editorialTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Animation') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {animationTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Photography') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {photoTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else if (tagParam === 'Packaging') {
      return (
        <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap' }}>
          {packagingTag.map((elem) => (
            <img style={{ width: '100%', padding: '20px' }} src={elem.image} />
          ))}
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <div className="mainTagWrapper">
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry columnsCount={2} gutter={4}> */}
        <div className="tagElementContainer">{renderComponent()}</div>
        {/* </Masonry>
        </ResponsiveMasonry> */}
      </div>

      <style jsx>{`
        .mainTagWrapper {
          width: 100%;
          padding: 40px 0px 0px 0px;
          background-color: yellow;
          display: flex;
          height: 100%;
          flex-wrap: wrap;
        }
        .tagElementContainer {
          width: 100%;
          height: 100%;
          background-color: tomato;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const { API_URL } = process.env
  const req = await fetch(`${API_URL}/api/projects`)
  const data = await req.json()

  const paths = [
    { params: { tag: 'Visual-Identity' } },
    { params: { tag: 'Illustration' } },
    { params: { tag: 'Animation' } },
    { params: { tag: 'Poster' } },
    { params: { tag: 'Photography' } },
    { params: { tag: 'Packaging' } },
    { params: { tag: 'Editorial' } },
  ]

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { API_URL } = process.env
  const req = await fetch(`${API_URL}/api/tag/${params.tag}`)
  const data = await req.json()
  return {
    props: {
      data: data,
    },
  }
}

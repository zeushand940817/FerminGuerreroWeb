import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default function GraphicDesign({ data }) {
  const projectsFilter = data
    .filter((project) => project.type === 'graphic')
    .map(({ id, image, name }) => ({ id, image, name }))

  return (
    <>
      <div className="imageContainer">
        <div className="col">
          {projectsFilter.map((projectFilter, key) => (
            <Link
              key={projectFilter.id}
              href={`/detailPage/${projectFilter.id}`}
              as={`/detailPage/${projectFilter.id}`}
            >
              <a>
                <div className="container">
                  <img
                    className="image"
                    src={projectFilter.image}
                    alt={projectFilter.name}
                  />
                  <div className="middle">
                    <p className="text">{projectFilter.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .imageContainer {
            max-width: 100%;
            height: auto;
            padding: 40px 10px 0px 10px;
            column-count: 3;
          }

          .container {
            position: relative;
            width: 100%;
          }

          .col {
            height: auto;
          }
          .image {
            padding-bottom: 10px;
            opacity: 1;
            display: inline-block;
            width: 100%;
            height: auto;
            transition: 0.5s ease;
            backface-visibility: hidden;
          }
          .middle {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            border-top: 1px solid white;
            opacity: 0;
            text-align: left;
            font-weight: bold;
            transition: ease 0.5s all;
          }
          .container:hover .image {
            opacity: 0.5;
            transition: ease 0.5s all;
            filter: grayscale(100%);
          }
          .container:hover .middle {
            opacity: 1;
          }

          .text {
            font-size: 20px;
            color: white;
            padding: 5px 10px 25px 10px;
          }
        `}</style>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/projects`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

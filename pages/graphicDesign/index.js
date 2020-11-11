import fetch from 'isomorphic-unfetch'
import Link from 'next/link'


export default function GraphicDesign({ data }) {

  const projectsFilter = data
    .filter((project) => project.type === 'graphic')
    .map(({ id, image, name }) => ({ id, image, name }))

  return (
    <>
   <div className='imageContainer'>
     <div className='col'>
      {projectsFilter.map((projectFilter, key) => (
      <Link
        key={projectFilter.id}
        href={`/detailPage/${projectFilter.id}`}
        as={`/detailPage/${projectFilter.id}`} >
        <a>
          <div className='container'>
          <img
            className='image' 
            src={projectFilter.image}
            alt={projectFilter.name} />
            <div className='middle'>
              <p className="text">{projectFilter.name}</p>
            </div>
      </div>
      </a>
        </Link>
        ))}
      </div>

  <style jsx>{`
  .imageContainer{
      max-width: 100vw;
      height:auto;
      padding: 10px 10px 0px 10px;
      column-count: 3;
    }
   
   .container{
    position: relative;
    width: 100%;
   }
@media screen and (max-width: 667px) {
      .imageContainer{
        column-count:1;
        overflow-y: hidden;
        }   
      } 
    .col{
      height: auto;
    }
    .image{
      padding-bottom: 10px;
      opacity: 1;
      display: inline-block;
      width: 100%;
      height: auto;
      transition: .5s ease;
      backface-visibility: hidden;
    }
    .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    }
    .container:hover .image {
    opacity: 0.3;
    }
    .container:hover .middle {
      opacity: 1;
    }

    .text {
      background-color: orange;
      color: white;
      font-size: 20px;
      padding: 16px 32px;
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

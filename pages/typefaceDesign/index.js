import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default function GraphicDesign({ data }) {
  const projectsFilter = data
    .filter((project) => project.type === 'typeface')
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
           <img
             className='imagen' 
             src={projectFilter.image}
             alt={projectFilter.name} />  
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

@media screen and (max-width: 667px) {
      .imageContainer{
        column-count:1;
        }   
      } 
    .col{
      height: auto;
    }

    .imagen{
      width:100%;
      border-radius:10px;
      padding: 10px;
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
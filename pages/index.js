import fetch from 'isomorphic-unfetch';



export default function Home({ data }) {

return(
  <>

    <style jsx>{`
  
  
    `}</style>
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

{/* 
{projects.map((project, key) => (
      <img
        className='imagen' 
        src={project.image}
        alt={project.name} />  
        ))}
   */}
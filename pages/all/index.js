// import { Link } from 'next/link'


export default function All({ data }) {
  const projects = data;

  return (
    <div className='imageContainer'>
      <div className='col'>
      {projects.map((project, key) => (
          <img
            className='imagen' 
            key={project.id}
            src={project.image}
            alt={project.name}
            />  
           ))}
      </div>

    <style jsx>{`
    .imageContainer{
      max-width: 100vw;
      height:auto;
      padding: 40px 10px 0px 10px;
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

  );
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



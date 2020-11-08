import fetch from 'isomorphic-unfetch';

const images = [

]

export default function Home({ data }) {
  const landings = data
  
    return (
      <div>  
      {landings.map((landing, key) => {
          return(
          <div key={landing.id}>
          <img
            className='imagen' 
            src={landing.image}/>  
            </div>
              )
            })} 
      </div>
    );
  }


// 

// return(
//   <>

//     <style jsx>{`
  
  
//     `}</style>
//     </>
//   )
// }


export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/landings`)
  const data = await res.json()
  console.log(data, 'data')

  return {
    props: {
      data: data,
    },
  }
}


{/* <img style={{maxWidth: '100%', scale: '5.1', transition: '6.1s'}} src={imagesPath[imageName]} onMouseMove={this.toggleImage} />  */}
import fetch from 'isomorphic-unfetch';
import landings from 'database/landings';
import { Component } from 'react';


const images = [

]

class Home extends Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? '1' : '2' 

  render() {
    const imageName = this.getImageName();
    return (
      <div>
    {/* <img style={{maxWidth: '100%', scale: '5.1', transition: '6.1s'}} src={imagesPath[imageName]} onMouseMove={this.toggleImage} />  */}
      </div>
    );
  }
}
export default Home;

// export default function Home({ data }) {

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

{/* 
{projects.map((project, key) => (
      <img
        className='imagen' 
        src={project.image}
        alt={project.name} />  
        ))}
   */}
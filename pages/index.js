import fetch from 'isomorphic-unfetch';
import { Component } from 'react'
import landings from 'database/landings'

const imagesPath = {
  '1': landings[0].image,
  '2': landings[1].image,
  '3': landings[2].image,
  '4': landings[3].image,
}

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
      <>
      <div>
       <img style={{maxWidth: '100%', transition: 'transform 1s', transition: 'all .5s ease'}} src={imagesPath[imageName]} onMouseMove={this.toggleImage} /> 
      </div>
  

<style jsx>{`
  .image{
   width:100vw;
   height:100vh;
   position:center;
  }
  `}</style>
      </>
    );
  }
}
export default Home;

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
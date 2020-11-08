import fetch from 'isomorphic-unfetch';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home({ data }) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }

  const landings = data
  
    return (
      <>
      <Slider {...settings}>
      <div className='images'> 
    
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
    </Slider>

<style jsx>{`
  .images{
    max-width:400px;
  }
  `}</style>
      </>
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
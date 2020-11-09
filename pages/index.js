import fetch from 'isomorphic-unfetch';
import AnimatedBg from "react-animated-bg";


  
export default function Home(){
  const imagesList = [
    'url("/CoverPhotos/Landing/DinMachine.jpg")',
    'url("/CoverPhotos/Landing/Exentra.jpg")',
    'url("/CoverPhotos/Landing/FeriaDelLibro.jpg")',
    'url("/CoverPhotos/Landing/FGC.jpg")',
    'url("/CoverPhotos/Lading/GenevaMotorShow.jpg")'
  ];
      return(
        <>
        <AnimatedBg   
        colors={imagesList}
        duration={2}
        delay={false}
        timingFunction="step-end"
    >
      <div className='image'>
        
      </div>
    </AnimatedBg>

        


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


// <div className='images'> 
    
// {landings.map((landing, key) => {
//     return(
//     <div key={landing.id}>
//     <img
//       className='imagen' 
//       src={landing.image}/>  
//       </div>
//         )
//       })} 

// </div>
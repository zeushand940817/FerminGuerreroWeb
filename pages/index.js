import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import landings from 'database/landings'

export default function Home() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500
  };


  return (
    <>
    <Head>
      <title>Fermin Guerrero</title>
    </Head>

    <div >
    <Slider {...settings}>
      {landings.map((landing) =>
        <image 
        style={{width:500, height: 600}}
        className='imagen' 
        src={landing.image} />
      )}
    </Slider>
  </div>

    <style jsx>{`
    .imagen{
      width:100vw;
      height:600px;
      border-radius:10px;
      padding: 10px;
      border-bottom: 1px solid white;
    }
    `}</style>
    </>
  )
}

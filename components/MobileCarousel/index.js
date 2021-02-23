import Carousel from 'react-multi-carousel'

const MobileCarousel = ({ mobileImages }) => {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 677 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 677, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        style={{
          background: active ? 'white' : 'transparent',
          mixBlendMode: 'difference',
          borderRadius: '100px',
          marginBottom: '20px',
          marginRight: '5px',
          width: '10px',
          height: '10px',
          border: '2px solid white',
          borderRadius: '10px',
          marginBottom: '80px',
        }}
      >
        <button
          style={{
            background: 'transparent',
            mixBlendMode: 'difference',
            borderRadius: '100px',
            outline: 'none',
            border: 'none',
            height: '10px',
          }}
          onClick={() => onClick()}
        />
      </li>
    )
  }

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={3000}
      swipeable={true}
      customTransition="transform 300ms ease-in-out"
      draggable={false}
      autoPlay
      arrows={false}
      showDots={true}
      containerClass="carouselContainer"
      customDot={<CustomDot />}
    >
      {mobileImages.map((image, key) => (
        <div style={{ height: '100vh' }}>
          <img
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="graphic-design-image"
            src={image}
            key={`${key} ${image}`}
          />
        </div>
      ))}
    </Carousel>
  )
}
export default MobileCarousel

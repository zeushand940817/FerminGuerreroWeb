export default function ({image, active}){
  return(
    <>
    <div>
      <img 
        className={active && 'isActive'} 
        src={image} 
        alt='article image'
      />
    </div>

    <style jsx>{`
      img{
        width:200px;
        opacity:0;
        object-fit:contain;
        cursor:pointer; 
        pointer-events:none; 
      }

      .isActive {
      opacity:1;
      }
   
      `}</style>
    </>
  )
}
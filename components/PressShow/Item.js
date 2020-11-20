import Grid from '@material-ui/core/Grid';
import Media from 'components/PressShow/Media';

export default function ({ title, description, year, setActiveIndex, index }){
  return(
    <>

{/* <div className='containerExample'
    onMouseEnter={() => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(-1)}
>
      <div className="item item1">{year}</div>
      <div className="item item2">{title}{description}</div>  
</div>  */}


   <div className='projectItem'
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}>
        

      <p className='year'>{year}</p>

      <h3 className='projectTitle'><span>{title}</span></h3>

      <span className='description'>{description}</span> 

    </div> 

  
  <style jsx>{`

    .projectItem {
      color:white;
      display:flex;
      align-items: center;
      cursor:pointer;

    }
    .projectTitle {
      font-size:20px;
      color:white;
      font-weight:300;
      display:flex;
      z-index:2;
    }

   .description{

    }

    .year{

    } 

    .projectTitle:hover {
      opacity:0.1;
    }
    
    `}</style>


    </>  
   ) 
}


// transition: opacity .35s cubic-bezier(.77, 0 , 0.175, 1);